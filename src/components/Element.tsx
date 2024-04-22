'use client'
import TextBlock from "./TextBlock"

interface ElementProps {
    left: number,
    top: number,
    width: number,
    height: number
}

export default function Element({ left, top, width, height }: ElementProps) {
    return (
        <div className="w-64 h-80 rounded-md bg-midnight">
            <TextBlock text="test" color="#f1f7ed" width={width} height={height} top={top} left={left} />
        </div>
    );
}