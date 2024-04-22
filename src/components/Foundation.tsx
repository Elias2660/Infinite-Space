'use client'
import CanvasChecker from "@/utils/CanvasChecker";
import { PropsWithChildren } from "react";
import { inBounds } from "@/utils/CoreUtils";

export interface CanvasPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}

export function Position({ left, top, width, height, children }: PropsWithChildren<CanvasPosition>) {
    const screen = CanvasChecker.screen;
    if (
        inBounds(
            { left, top, height, width },
            { left: screen.x, top: screen.y, width: screen.width, height: screen.height }
        )
    ) {
        return (
            <div className="absolute inline-block"
                style={{ left: `${left - screen.x}px`, top: `${top - screen.y}px` }}
            >
                {children}
            </div>
        );
    } else return null;
};
