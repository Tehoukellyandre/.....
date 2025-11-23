import { useEffect, useState } from "react";
import familleOne from '../assets/image/famille1.webp' 
import familleTwo from '../assets/image/faamille2.webp'

export function FamilleInteret() {
  const slides = [
    {
        image: familleOne,
        title: "Notre objectif",
        subtitle: "Vous apporter le confort que vous et votre famille méritez",
    } ,
    { 
        image: familleTwo,
        title: "Et cela depuis le confort de chez vous",
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-72 md:h-[450px]">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-100 md:h-[450px] flex-shrink-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay + texte si présent */}
            {slide.title && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-6 md:px-12">
                <div className="text-white text-center max-w-lg">
                  <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="mt-2 text-sm md:text-lg drop-shadow-md">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
