import React from 'react';
import { DroneFooterStitch } from './DroneFooterStitch';

type DroneFooterStitchEnProps = {
    missionText?: string;
    menuTitle?: string;
    contactTitle?: string;
};

export function DroneFooterStitchEn(props: DroneFooterStitchEnProps) {
    return <DroneFooterStitch lang="en" {...props} />;
}

