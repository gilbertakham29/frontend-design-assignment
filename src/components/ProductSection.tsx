"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductSection() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };
  return (
    <div>
      <header className="bg-gray-100 p-4">
        <nav className="max-w-7xl inline-flex justify-between items-center gap-2 mx-auto">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>{" "}
          <div className="border rounded-full w-1 p-1 h-1 bg-stone-200"></div>{" "}
          <span className="text-stone-700">Art de la table</span>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
          {/* Left Section: Image Gallery*/}
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="  inline-flex border-2 border-gray-100 p-2">
              <div className="flex-gap-2  mt-4">
                <Image
                  src="/Table.png"
                  alt="Thumbnail 1"
                  width={50}
                  height={50}
                  className=" object-cover border rounded cursor-pointer"
                />
                <Image
                  src="/Table.png"
                  alt="Thumbnail 2"
                  width={50}
                  height={50}
                  className=" object-cover border rounded cursor-pointer"
                />
                <Image
                  src="/Table.png"
                  alt="Thumbnail 3"
                  width={50}
                  height={50}
                  className=" object-cover border rounded cursor-pointer"
                />
                <Image
                  src="/Table.png"
                  alt="Thumbnail 4"
                  width={50}
                  height={50}
                  className=" object-cover border rounded cursor-pointer"
                />
              </div>

              <Image
                src="/Cheese.png"
                alt="thumbnail"
                width={500}
                height={100}
                className="object-cover rounded-md mb-4"
              />
            </div>
            {/* Additional Info Sections*/}
            <div className="border-t mt-6 pt-4">
              <h2 className="text-lg font-medium mb-2">Description produit</h2>
              <p className="text-gray-600">
                Festi vous propose à la location un/une &quot;Jewel – grand
                couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
                (HTVA). Que ce soit pour votre mariage, une fête
                d&apos;anniversaire ou du personnel, ce produit a fait
                l&apos;objet d&apos;une sélection rigoureuse par notre équipe.
                Il est en location chez nous sous la référence
                &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les
                événements de nos clients, même en last-minute, soient toujours
                une réussite. Vous pourrez trouver tout une série d&apos;autre
                produit à louer de ce type dans la catégorie &quot;Art de la
                Table&quot;.
              </p>
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <p className="text-xl text-gray-700 font-medium mb-2">
              39,50€ / <span className="text-sm">pièce</span>
            </p>

            <div className="flex flex-row items-center justify-between text-gray-600 space-x-4 mb-4">
              <div className="inline-flex gap-8">
                <p className="inline-flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8616 5.11819L18.8818 0.138422C18.7931 0.0498281 18.673 0 18.5476 0C18.4223 0 18.3022 0.0498281 18.2135 0.138422L14.9272 3.42473L14.9272 3.42478L14.9271 3.42483L11.6409 6.71105L11.6408 6.71114L11.6407 6.71123L1.78153 16.5704L1.78148 16.5705L0.138375 18.2135C0.0498281 18.3022 0 18.4223 0 18.5476C0 18.6729 0.0498281 18.7932 0.138422 18.8818L5.11823 23.8616C5.21053 23.9539 5.33147 24 5.45236 24C5.5733 24 5.69419 23.9539 5.78648 23.8616L23.8616 5.78648C23.9502 5.69789 24 5.57766 24 5.45236C24 5.32702 23.9502 5.20683 23.8616 5.11819ZM5.45236 22.8591L1.14089 18.5476L2.11561 17.5729L2.94347 18.4008C3.03577 18.4931 3.1567 18.5392 3.27759 18.5392C3.39853 18.5392 3.51942 18.4931 3.61172 18.4008C3.79627 18.2162 3.79627 17.917 3.61172 17.7324L2.78391 16.9046L3.75891 15.9296L5.26889 17.4396C5.36119 17.5319 5.48212 17.578 5.60302 17.578C5.72395 17.578 5.84484 17.5318 5.93714 17.4396C6.12169 17.255 6.12169 16.9558 5.93714 16.7713L4.42716 15.2613L5.40211 14.2863L6.22997 15.1142C6.32227 15.2065 6.4432 15.2526 6.56409 15.2526C6.68498 15.2526 6.80592 15.2065 6.89822 15.1142C7.08277 14.9296 7.08277 14.6304 6.89822 14.4458L6.07036 13.618L7.04513 12.6432L8.5553 14.1534C8.64759 14.2457 8.76853 14.2919 8.88942 14.2919C9.01036 14.2919 9.1313 14.2457 9.22355 14.1534C9.40809 13.9689 9.40809 13.6697 9.22355 13.4851L7.71333 11.9749L8.68814 11.0001L9.516 11.8276C9.60825 11.9199 9.72919 11.966 9.85003 11.966C9.97102 11.966 10.092 11.9198 10.1842 11.8275C10.3687 11.6429 10.3687 11.3437 10.1841 11.1592L9.35634 10.3318L10.3315 9.35667L11.8417 10.8669C11.934 10.9592 12.0549 11.0053 12.1758 11.0053C12.2967 11.0053 12.4177 10.9592 12.51 10.8669C12.6945 10.6823 12.6945 10.3831 12.51 10.1985L10.9997 8.68833L11.9745 7.71361L12.8023 8.54147C12.8946 8.63377 13.0155 8.67989 13.1364 8.67989C13.2573 8.67989 13.3783 8.63372 13.4706 8.54147C13.6551 8.35692 13.6551 8.05772 13.4706 7.87317L12.643 7.04531L13.6178 6.07055L15.128 7.58077C15.2203 7.67306 15.3412 7.71919 15.4621 7.71919C15.583 7.71919 15.7039 7.67302 15.7962 7.58077C15.9808 7.39622 15.9808 7.09702 15.7962 6.91247L14.286 5.4022L15.261 4.42725L16.0886 5.25487C16.1809 5.34717 16.3018 5.3933 16.4227 5.3933C16.5436 5.3933 16.6645 5.34717 16.7568 5.25487C16.9414 5.07033 16.9414 4.77112 16.7568 4.58653L15.9293 3.75891L16.9043 2.78391L18.4145 4.29413C18.5068 4.38642 18.6278 4.43255 18.7486 4.43255C18.8695 4.43255 18.9905 4.38637 19.0828 4.29413C19.2673 4.10958 19.2673 3.81037 19.0828 3.62583L17.5729 2.11561L18.5476 1.14089L22.8591 5.45236L5.45236 22.8591Z"
                      fill="#9C9C9C"
                    />
                  </svg>

                  <span className="text-lg mr-2">
                    20 <sup>cm</sup>
                  </span>
                </p>
                <p className="inline-flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5295 0.954895C18.9217 0.954895 24.1035 6.13678 24.1035 12.529C24.1035 18.9212 18.9217 24.103 12.5295 24.103C6.13728 24.103 0.955395 18.9212 0.955395 12.529C0.955395 6.13678 6.13728 0.954895 12.5295 0.954895ZM12.5295 1.88082C6.64866 1.88082 1.88132 6.64816 1.88132 12.529C1.88132 18.4098 6.64866 23.1771 12.5295 23.1771C18.4103 23.1771 23.1776 18.4098 23.1776 12.529C23.1776 6.64816 18.4103 1.88082 12.5295 1.88082Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M24.0046 0.395325L24.6595 1.04994L1.05458 24.6632L0.399731 24.0086L24.0046 0.395325Z"
                      fill="#9C9C9C"
                    />
                  </svg>

                  <span className="text-lg mr-2">
                    50<sup>cm</sup>
                  </span>
                </p>
              </div>

              <div className="items-end">
                {" "}
                <p className="flex items-center">
                  <span className="text-sm mr-2">REF : VABGN5</span>
                </p>
              </div>
            </div>

            <ul className="list-none space-y-2 mb-4 text-gray-700">
              <li>
                Location appareil a raclette - Raclette traditionnelle 1/2 roue
              </li>
              <li>Réglable en hauteur</li>
              <li>Appareil à raclette professionnel</li>
              <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            </ul>
            <ul className="list-none space-y-2 mt-8 text-gray-700">
              <li className="">220V</li>
              <li>900W</li>
            </ul>

            {/*Quantity and Add to Cart */}
            <div className=" lg:mt-40 mt-4 flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded-md">
                <button
                  aria-label="decrease quantity"
                  onClick={() => handleChange(false)}
                  className="px-3 py-1 bg-gray-100 text-lg font-bold hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-1 w-10 text-center">{quantity}</span>
                <button
                  aria-label="increase quantity"
                  onClick={() => handleChange(true)}
                  className="px-3 py-1 bg-gray-100 text-lg font-bold hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button className="px-6 w-full py-2 bg-teal-800 text-white rounded-md hover:bg-teal-400">
                AJOUTER AU PANIER
              </button>
            </div>
            {/*Accordion Sections */}
            <div className=" border-t-gray-100 mt-6 pt-4">
              <button
                aria-label="view more"
                className="flex items-center justify-between w-full py-3 border-b-gray-100 transition-all duration-300"
              >
                <span className="text-lg font-medium">LIVRAISONS</span>
                <span className="text-xl">+</span>
              </button>
              <button
                aria-label="view-more"
                className="flex items-center justify-between w-full py-3 border-b-gray-100 transition-all duration-300"
              >
                <span className="text-lg font-medium">QUESTIONS</span>
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
