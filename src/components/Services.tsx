import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-50">
      {/*Services Section*/}
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">
          On s&apos;occupe de <span className="text-blue-500">tout</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7  px-6 lg:px-64">
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 ">
              <Image
                src="/Group1.webp"
                width={50}
                height={50}
                alt="group1"
                className="hover:scale-110 duration-200"
              />
            </div>
            <h3 className="text-lg font-semibold">Livrasion & Reprise</h3>
            <p className="text-gray-500">Selon vos besoins</p>
          </div>
          <div className="lg:border border-pink-200 h-0 px-10 my-6"></div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <Image
                src="/Group2.webp"
                width={50}
                height={50}
                alt="group2"
                className="hover:scale-110 duration-200"
              />
            </div>
            <h3 className="text-lg font-semibold">Nettoyage</h3>
            <p className="text-gray-500">Selon vos besoins</p>
          </div>
          <div className="lg:border border-pink-200 h-0 px-10 my-6"></div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 ">
              <Image
                src="/Group3.webp"
                width={50}
                height={50}
                alt="group3"
                className="hover:scale-110 duration-200"
              />
            </div>
            <h3 className="text-lg font-semibold">Commande Illimitée</h3>
            <p className="text-gray-500">Tout est possible</p>
          </div>
          <div className="lg:border border-pink-200 h-0 px-10 my-6"></div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <Image
                src="/Group4.webp"
                width={50}
                height={50}
                alt="group4"
                className="hover:scale-110 duration-200"
              />
            </div>
            <h3 className="text-lg font-semibold">Transport & Enlèvement</h3>
            <p className="text-gray-500">On s&apos;occcupe de tout.</p>
          </div>
        </div>
      </div>

      {/* Subscribe Section*/}
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between bg-white p-4 lg:p-8 shadow-md mx-4 lg:mx-20">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src="/Sofa.webp"
            alt="sofa"
            className="w-full rounded-lg shadow-md"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full p-4 lg:p-6 lg:w-1/2 text-center rounded-lg lg:text-left bg-pink-100">
          <h3 className="text-2xl font-semibold mb-4">
            S&apos;inscrire & economiser{" "}
            <span className="text-teal-600">10%</span>
          </h3>
          <p className="text-gray-800 mb-6">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn&apos;t. Yet busy any
            meeting shark light marginalised 4-blocker message. Productize
            corporate nail caught synergy highlights lunch. Company another
            pushback items dear or any.
          </p>

          <form className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2">
            <input
              type="email"
              placeholder="jhon@doe.com"
              className="border border-gray-300 rounded-l-lg px-4 py-2 w-full lg:w-3/4 focus:outline-none "
            />
            <button
              aria-label="subscribe to email"
              type="submit"
              className="bg-teal-800 text-white p-2 rounded-lg hover:bg-teal-500"
            >
              S&apos;INSCRIRE →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
