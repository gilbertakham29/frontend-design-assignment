"use client";
import React from "react";
import Image from "next/image";
export default function Articles() {
  const items = Array(6).fill({
    title: "Title",
    price: "0",
    description: "0,35€/Pièce - REF : VABGN5",
    tag: "ART DE LA TABLE",
    quantity: "20 pièces",
    image: "/TableOne.webp",
  });
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "auto",
      });
    }
  };
  return (
    <div className="p-4 lg:p-8">
      <div className="lg:flex justify-between items-center mb-4">
        <h2 className="lg:text-3xl text-xl font-normal">Articles similaries</h2>
        <a href="#" className="text-gray-500  underline">
          VOIR TOUTE LA COLLECTION
        </a>
      </div>
      <div className="relative">
        {/* Scroll Buttons*/}
        <button
          aria-label="scroll to left"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-white p-4 rounded-sm z-10 px-5 shadow-md hover:bg-teal-500"
        >
          &lt;
        </button>
        <button
          aria-label="scroll to right"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-white p-4 rounded-sm px-5 z-10 shadow-md hover:bg-teal-500"
        >
          &gt;
        </button>
        {/* Scrollable Container*/}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[200px] lg:min-w-[240px] flex-shrink-0 border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <button
                    aria-label="like counts"
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.99428 4.27985C8.32816 2.332 5.54978 1.80804 3.46224 3.59168C1.37469 5.37532 1.0808 8.35748 2.72015 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1174C9.71133 17.2513 9.78695 17.3183 9.87517 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1174C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99428 4.27985Z"
                        stroke="#8F9BA0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full  top-2 right-2">
                    {item.tag}
                  </span>
                </div>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={50}
                  className="w-full object-cover rounded-md mb-4"
                />
                <div className="flex flex-row justify-between items-start">
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-xl font-bold mb-1">
                    {item.price} <sup>€</sup>
                  </p>
                </div>
                <div className="flex flex-row justify-between gap-4 items-center">
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="">
                    <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
