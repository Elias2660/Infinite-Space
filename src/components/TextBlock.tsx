'use client'
import { CanvasPosition, Position } from "./Foundation";

interface TextBlockProps extends CanvasPosition {
    text: string;
    color: string;
    width: number;
    height: number;
}

export default function TextBlock({ text, color, left, top, width, height }: TextBlockProps) {
    return (
        <Position left={left} top={top} width={width} height={height}>
            <div
                className="flex items-center justify-center"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    background: color
                }}
            >
                {text}
            </div>
        </Position>
    );
};