'use client'
import CanvasChecker from "@/utils/CanvasChecker";
import { PointerEvent, useEffect, useRef, WheelEvent, useState, MouseEventHandler } from "react";
import useSize from "@react-hook/size";
import useRenderLoop from "@/utils/FrameRenderer";
import TextBlock from "@/components/TextBlock"
import InfiniteCanvas from "./InfiniteCanvas";

function wheelListener(e: WheelEvent) {
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

function pointerListener(event: PointerEvent) {
  CanvasChecker.movePointer(event.clientX, event.clientY);
};

interface elementProps {
  top: number,
  left: number
}


export default function CanvasRoot() {
  const [elements, setElements] = useState<elementProps[]>([]);
  const canvas = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(canvas);
  const screen = CanvasChecker.screen;

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const elementVal = {
      "left": event.nativeEvent.clientX + screen.x,
      "top": event.nativeEvent.clientY + screen.y,
    }
    setElements([...elements, elementVal]);
  }

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
        onClick={handleClick}
      >
        {/* <InfiniteCanvas frame={frame} /> */}
        {elements?.map((element: elementProps, key) => (
          <TextBlock frame={frame} key={key} text="asfgjavanjk" color="#FF0000" width={width} height={height} top={element.top} left={element.left} />
        ))}
      </div>
    </div>
  );
};
