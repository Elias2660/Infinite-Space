'use client'
import { memo } from "react";
import { RECT_W, RECT_H } from "@/utils/Constants";
import { CanvasPosition, Position } from "./Foundation";
import CanvasChecker from "@/utils/CanvasChecker"

interface TextBlockProps extends CanvasPosition {
    frame: string;
    text: string;
    color: string;
    width: number;
    height: number;
}

export default memo(function TextBlock({ frame, text, color, left, top, width, height }: TextBlockProps) {
    const scale = CanvasChecker.scale;

    return (
        <Position left={left} top={top} width={width} height={height}>
            <div
                className="flex items-center justify-center"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    background: color,
                    transform: `scale(${(scale.x, scale.y)})`,
                    transformOrigin: "top left"
                }}
            >
                {text}
            </div>
        </Position>
    );
});

