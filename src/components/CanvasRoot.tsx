'use client'
import CanvasChecker from "@/utils/CanvasChecker";
import { PointerEvent, useEffect, useRef, WheelEvent } from "react";
import useSize from "@react-hook/size";
import useRenderLoop from "@/utils/FrameRenderer";
import Element from "./Element"

function wheelListener (e: WheelEvent) {
  const friction = 1;
  const event = e as WheelEvent;
  const deltaX = event.deltaX * friction;
  const deltaY = event.deltaY * friction;
  if (!event.ctrlKey) {
    CanvasChecker.moveCamera(deltaX, deltaY);
  } else {
    CanvasChecker.zoomCamera(deltaX, deltaY);
  }
};

function pointerListener (event: PointerEvent) {
  CanvasChecker.movePointer(event.clientX, event.clientY);
};

function handleClick(event: React.MouseEventHandler<HTMLButtonElement>) {
  
}


const CanvasRoot = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(canvas);
  useEffect(() => {
    if (width === 0 || height === 0) return;
    CanvasChecker.initialize(width, height, window);
  }, [width, height]);
  const frame = useRenderLoop(60);
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full relative overflow-hidden overscroll-none"
        ref={canvas}
        onWheel={wheelListener}
        onPointerMove={pointerListener}
      >
      </div>
    </div>
  );
};

export default CanvasRoot;
