/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react";

interface Baner {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}


const Carrosel = ({ children: slides, autoSlide=false, autoSlideInterval=3000 }: Baner) => {
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

  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  },[])

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)`}}>{ slides }</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-zinc-300 text-gray-800 hover:bg-white outline-none">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-zinc-300 text-gray-800 hover:bg-white outline-none">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className=" absolute bottom-4 right-0 left-0 ">
        <div className=" flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${currentSlide === i ? "p-3" : "bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
