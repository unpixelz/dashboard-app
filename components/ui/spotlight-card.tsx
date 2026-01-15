import { useRef, useState } from "react";

export default function SpotlightCard() {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative h-full w-full bg-slate-800 rounded-3xl p-px overflow-hidden group"
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Gradient blur effects */}
      <div
        className="absolute w-80 h-80 -left-40 -top-40 bg-slate-400 rounded-full opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 z-10 blur-[100px]"
        style={{
          transform: `translate(var(--mouse-x), var(--mouse-y))`,
        }}
      />
      <div
        className="absolute w-96 h-96 -left-48 -top-48 bg-indigo-500 rounded-full opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-10 z-30 blur-[100px]"
        style={{
          transform: `translate(var(--mouse-x), var(--mouse-y))`,
        }}
      />

      {/* Card content */}
      <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        {/* Radial gradient at bottom */}
        <div
          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-[80px]" />
        </div>

        <div className="flex flex-col h-full items-center text-center">
          {/* Button */}
          <a
            className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 cursor-pointer"
            href="#"
          >
            <svg
              className="fill-slate-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
            >
              <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
            </svg>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
}
