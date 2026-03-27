type ProcessNoteProps = {
    text: string;
};

export function ProcessNote({ text }: ProcessNoteProps) {
    return (
        <div className="bg-[#080808] pt-6 pb-0">
            <div className="container mx-auto px-6">
                <p className="text-xs text-white/40 text-center">{text}</p>
            </div>
        </div>
    );
}
