"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [lang, setLang] = useState("");
  const handleChange = () => {
    setLang(lang);
  };
  const [dropdown, setDropdown] = useState(false);
  const toggleDropDown = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <>
      {/* This is the header where all the logos,search bar and other items are placed*/}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:px-6 lg:px-10 mx-6">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Image
            src="/Group.webp"
            height={100}
            width={150}
            alt="company_logo"
          />
          <button
            aria-label="dropdown toogle"
            className="text-gray-500 lg:hidden   font-medium rounded-lg text-sm px-4 py-2.5"
            onClick={toggleDropDown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* Mobile view*/}
          {dropdown && (
            <ul className="flex flex-col absolute right-0 mt-2 w-48 bg-white border-gray-200 rounded-lg shadow-md">
              <li className="flex justify-between items-center gap-1">
                <div className="inline-flex gap-1">
                  <a href="#" className="text-gray-900 font-semibold text-sm">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 12.375V14.25C11.25 14.9489 11.25 15.2984 11.1358 15.574C10.9836 15.9416 10.6916 16.2336 10.324 16.3858C10.0484 16.5 9.69891 16.5 9 16.5C8.30109 16.5 7.95163 16.5 7.67597 16.3858C7.30843 16.2336 7.01642 15.9416 6.86418 15.574C6.75 15.2984 6.75 14.9489 6.75 14.25V12.375M11.25 12.375C13.2366 11.507 14.625 9.43161 14.625 7.125C14.625 4.0184 12.1066 1.5 9 1.5C5.8934 1.5 3.375 4.0184 3.375 7.125C3.375 9.43161 4.76336 11.507 6.75 12.375M11.25 12.375H6.75"
                        stroke="#282F35"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <span className="text-sm font-medium">Inspirations</span>
                </div>

                <button
                  aria-label="close the dropdown"
                  className=" p-1 text-gray-500 hover:text-gray-800"
                  onClick={toggleDropDown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
              <li className="inline-flex gap-1">
                <a href="#" className="text-gray-900 font-semibold text-sm">
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
                </a>
                <span className="text-sm font-medium">Mes favoris</span>
              </li>

              <div className="inline-flex p-2  gap-4">
                <button
                  aria-label="add items to cart"
                  className="text-gray-900 lg:text-white lg:bg-blue-400 bg-gray-200  lg:hover:bg-blue-500 font-medium rounded-lg px-2 py-1 text-sm lg:px-4 lg:py-2.5 lg:mx-2 inline-flex items-center gap-1"
                >
                  <svg
                    width="20"
                    height="20"
                    color=""
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-teal-400"
                  >
                    <path
                      d="M1.66666 1.66663H2.75513C2.96014 1.66663 3.06265 1.66663 3.14514 1.70433C3.21784 1.73755 3.27944 1.79098 3.32261 1.85825C3.3716 1.93458 3.3861 2.03606 3.41509 2.23901L3.80951 4.99996M3.80951 4.99996L4.68609 11.4428C4.79733 12.2604 4.85295 12.6692 5.04841 12.9769C5.22064 13.2481 5.46756 13.4637 5.75945 13.5978C6.09071 13.75 6.50328 13.75 7.32841 13.75H14.46C15.2454 13.75 15.6382 13.75 15.9591 13.6086C16.2421 13.484 16.4849 13.2832 16.6602 13.0285C16.8591 12.7396 16.9326 12.3538 17.0796 11.5823L18.1826 5.79137C18.2343 5.5198 18.2602 5.38401 18.2227 5.27788C18.1898 5.18477 18.1249 5.10636 18.0396 5.05664C17.9424 4.99996 17.8041 4.99996 17.5277 4.99996H3.80951ZM8.33332 17.5C8.33332 17.9602 7.96023 18.3333 7.49999 18.3333C7.03975 18.3333 6.66666 17.9602 6.66666 17.5C6.66666 17.0397 7.03975 16.6666 7.49999 16.6666C7.96023 16.6666 8.33332 17.0397 8.33332 17.5ZM15 17.5C15 17.9602 14.6269 18.3333 14.1667 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 17.0397 13.7064 16.6666 14.1667 16.6666C14.6269 16.6666 15 17.0397 15 17.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Panier
                </button>
                <div className="w-8 lg:rounded-2xl rounded-full h-8 text-center bg-gray-200">
                  <span className="text-center">24</span>
                </div>
              </div>
            </ul>
          )}
        </div>

        <form className="w-full sm:w-1/2 mt-4 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 end-8 flex items-center ps-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                    stroke="#003349"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-50 rounded-lg bg-gray-50 mt-4"
              placeholder="Rechercher un produit"
            />
          </div>
        </form>
        <div className="hidden lg:flex sm:flex-row flex-col justify-between items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 12.375V14.25C11.25 14.9489 11.25 15.2984 11.1358 15.574C10.9836 15.9416 10.6916 16.2336 10.324 16.3858C10.0484 16.5 9.69891 16.5 9 16.5C8.30109 16.5 7.95163 16.5 7.67597 16.3858C7.30843 16.2336 7.01642 15.9416 6.86418 15.574C6.75 15.2984 6.75 14.9489 6.75 14.25V12.375M11.25 12.375C13.2366 11.507 14.625 9.43161 14.625 7.125C14.625 4.0184 12.1066 1.5 9 1.5C5.8934 1.5 3.375 4.0184 3.375 7.125C3.375 9.43161 4.76336 11.507 6.75 12.375M11.25 12.375H6.75"
                stroke="#282F35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="text-gray-900 font-semibold text-sm">
              Inspirations
            </h4>
          </div>
          <div className="flex items-center lg:whitespace-nowrap lg:inline-flex lg:gap-1 gap-2">
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

            <h4 className="text-gray-900 font-semibold text-sm">Mes favoris</h4>
          </div>
          <div className="w-8 rounded-full h-8 flex justify-center items-center text-center bg-gray-200">
            <span className="text-center">24</span>
          </div>
          <div className="inline-flex justify-center gap-4">
            <button
              aria-label="add items to cart"
              className="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 mx-2 inline-flex items-center gap-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66666 1.66663H2.75513C2.96014 1.66663 3.06265 1.66663 3.14514 1.70433C3.21784 1.73755 3.27944 1.79098 3.32261 1.85825C3.3716 1.93458 3.3861 2.03606 3.41509 2.23901L3.80951 4.99996M3.80951 4.99996L4.68609 11.4428C4.79733 12.2604 4.85295 12.6692 5.04841 12.9769C5.22064 13.2481 5.46756 13.4637 5.75945 13.5978C6.09071 13.75 6.50328 13.75 7.32841 13.75H14.46C15.2454 13.75 15.6382 13.75 15.9591 13.6086C16.2421 13.484 16.4849 13.2832 16.6602 13.0285C16.8591 12.7396 16.9326 12.3538 17.0796 11.5823L18.1826 5.79137C18.2343 5.5198 18.2602 5.38401 18.2227 5.27788C18.1898 5.18477 18.1249 5.10636 18.0396 5.05664C17.9424 4.99996 17.8041 4.99996 17.5277 4.99996H3.80951ZM8.33332 17.5C8.33332 17.9602 7.96023 18.3333 7.49999 18.3333C7.03975 18.3333 6.66666 17.9602 6.66666 17.5C6.66666 17.0397 7.03975 16.6666 7.49999 16.6666C7.96023 16.6666 8.33332 17.0397 8.33332 17.5ZM15 17.5C15 17.9602 14.6269 18.3333 14.1667 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 17.0397 13.7064 16.6666 14.1667 16.6666C14.6269 16.6666 15 17.0397 15 17.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Panier
            </button>
          </div>

          <div>
            <Image src="/Avatar.webp" width={50} height={50} alt="avatar" />
          </div>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2">
            <span>{lang}</span>
            <select aria-label="select your language" onChange={handleChange}>
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
