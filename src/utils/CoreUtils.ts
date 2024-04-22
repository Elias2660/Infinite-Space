interface Bounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function inBounds(corA: Bounds, corB: Bounds): Boolean {
  return (
    corA.left < corB.left + corB.width &&
    corA.left + corA.width > corB.left &&
    corA.top < corB.top + corB.height &&
    corA.top + corA.height > corB.top
  );
}

export const radians = (angle: number) => {
  return angle * (Math.PI / 180);
};
