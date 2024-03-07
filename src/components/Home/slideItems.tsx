/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react";

interface Baner {
  children: React.ReactNode[];
}


const SlideItems = ({ children: slides }: Baner) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setCurrentSlide(curr => {
      const newSlide = curr === 0 ? slides.length - 1 : curr - 1;
      console.log("Previous Slide:", newSlide);
      return newSlide;
    });
  };

  const next = () => {
    setCurrentSlide(curr => {
      const newSlide = curr === slides.length - 1 ? 0 : curr + 1;
      console.log("Next Slide:", newSlide);
      return newSlide;
    });
  };

  console.log("Current Slide:", currentSlide);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)`}}>{ slides }</div>
      <div className="absolute inset-0 flex items-center justify-between py-4">
        <button onClick={prev} className="p-1 shadow bg-zinc-300 text-gray-800 hover:bg-white outline-none h-full">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 shadow bg-zinc-300 text-gray-800 hover:bg-white outline-none h-full">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default SlideItems;
