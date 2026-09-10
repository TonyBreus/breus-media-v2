import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let targetUrl = searchParams.get('url');

    if (!targetUrl) {
        return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    // Ensure URL has protocol
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; BreusMediaBot/1.0; +https://breus.media)',
                'Accept': 'text/html',
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch the website' }, { status: response.status });
        }

        const html = await response.text();

        // Very basic regex parsing (sufficient for a lightweight analyzer)
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        let title = titleMatch ? titleMatch[1].trim() : '';

        // Try to find meta description
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) || 
                          html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i) ||
                          html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        let description = descMatch ? descMatch[1].trim() : '';

        // Clean up entities loosely
        title = title.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
        description = description.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

        // Count media tags
        const imgMatches = html.match(/<img[^>]+>/gi);
        const imgCount = imgMatches ? imgMatches.length : 0;

        const videoMatches = html.match(/<video[^>]+>/gi);
        const iframeMatches = html.match(/<iframe[^>]+src=["'][^"']*(youtube|vimeo)[^"']*["'][^>]*>/gi);
        const videoCount = (videoMatches ? videoMatches.length : 0) + (iframeMatches ? iframeMatches.length : 0);

        // Approximate HTML size in KB
        const htmlSizeKb = Math.round(html.length / 1024);
        
        // Basic performance heuristic (just for presentation)
        const loadSpeedEstimate = htmlSizeKb < 150 ? 'Отличная (быстрее 2 сек)' : htmlSizeKb > 500 ? 'Низкая (дольше 4 сек)' : 'Средняя (2-4 сек)';

        return NextResponse.json({
            url: targetUrl,
            title: title || 'Не удалось определить название',
            description: description || 'Описание не найдено (отсутствует SEO-тег)',
            media: {
                images: imgCount,
                videos: videoCount
            },
            performance: {
                htmlSizeKb,
                loadSpeedEstimate
            }
        });

    } catch (error) {
        console.error("Scanner Error:", error);
        return NextResponse.json({ 
            error: 'Failed to analyze the website. It might be protected or unreachable.',
            fallback: true 
        }, { status: 200 }); // Return 200 so the frontend can handle it gracefully
    }
}
