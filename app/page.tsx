import { Metadata } from "next"
import Image from "next/image";
import { Button } from "components/Button/Button"
import Navbar from "components/Navbar";

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="w-full bg-rose-100 dark:bg-gray-900">
        <div className="w-dyn-list bg-green-800">
          <div role="list" className="">
            <div role="listitem" className="w-dyn-item">
              <div className="flex justify-center pt-2 pb-2 text-center">
                <div className="alert-text text-rose-100">
                  SupportNinja is hiring! Apply through our Jobs Board.{" "}
                  <a href="https://www.supportninja.com/careers" className="underline">
                    Find Open Positions Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Navbar/> */}
        <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4 pt-5 pr-28 pb-20 pl-28 md:justify-between">
          <a href="https://www.supportninja.com/">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20|%20Full%20Logo.svg"
              width={156.29}
              height={26.78}
              alt="Support Ninja | Full Logo"
              className="nav-wordmark"
              loading="lazy"
            />
          </a>
          <a>Solutions</a>
          <a>Industries</a>
          <a>How It Works</a>
          <a>About</a>
          <a>Resources</a>
          {/* <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg> */}
          <button className="rounded-full bg-green-950 px-5 py-3 text-white">Get Started</button>
        </div>
      </section>
      <section className="bg-rose-100 pb-24 dark:bg-gray-900">
        <div className="mx-5">
          <div className="flex w-full flex-wrap items-center justify-center px-48 pb-7 text-center text-3xl font-medium">
            <span>
              {" "}
              Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power
              your growth.
            </span>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center text-center font-sans text-6xl font-extrabold">
            <span>Outsourcing worth talking about</span>
          </div>
        </div>
      </section>

      <section className="bg-rose-100">
        <hr className="mx-24 border-t-1 border-gray-400 pb-12" />
        <div className="flex w-full flex-wrap items-center justify-center text-center font-sans text-xl font-extrabold">
          <span>Which outsourcing solutions are you looking for?</span>
        </div>
        <div className="text-md flex w-full flex-wrap items-center justify-center pb-4 text-center font-sans font-medium">
          <span>Choose as many as you need.</span>
        </div>
        <div className="mx-24 flex justify-center">
          <div className="relative mx-6 flex h-48 w-36 flex-col items-center rounded-2xl bg-[#FBECE2] p-6 shadow-md">
            <input type="checkbox" className="absolute top-4 right-4 h-5 w-5" />
            <div className="flex flex-grow items-center justify-center">
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-bold">test</p>
          </div>
          <div className="relative mx-6 flex h-48 w-36 flex-col items-center rounded-2xl bg-[#FBECE2] p-6 shadow-md">
            <input type="checkbox" className="absolute top-4 right-4 h-5 w-5" />
            <div className="flex flex-grow items-center justify-center">
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-bold">test</p>
          </div>
          <div className="relative mx-6 flex h-48 w-36 flex-col items-center rounded-2xl bg-[#FBECE2] p-6 shadow-md">
            <input type="checkbox" className="absolute top-4 right-4 h-5 w-5" />
            <div className="flex flex-grow items-center justify-center">
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-bold">test</p>
          </div>
          <div className="relative mx-6 flex h-48 w-36 flex-col items-center rounded-2xl bg-[#FBECE2] p-6 shadow-md">
            <input type="checkbox" className="absolute top-4 right-4 h-5 w-5" />
            <div className="flex flex-grow items-center justify-center">
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-bold">test</p>
          </div>
          <div className="relative mx-6 flex h-48 w-36 flex-col items-center rounded-2xl bg-[#FBECE2] p-6 shadow-md">
            <input type="checkbox" className="absolute top-4 right-4 h-5 w-5" />
            <div className="flex flex-grow items-center justify-center">
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-bold">test</p>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button className="flex items-center justify-between rounded-full bg-red-500 px-6 py-3 font-serif text-lg text-white shadow-md transition duration-300 hover:bg-red-600">
            Get Started
            <span className="ml-4 flex items-center justify-center rounded-full bg-white p-2 text-red-500">➝</span>
          </button>
        </div>

        <div className="relative bg-[#FAE7DB] py-16">
      <div className="mx-auto max-w-6xl bg-gray-400 rounded-lg p-8 flex items-center">
        <div className="text-black font-semibold text-xl md:text-2xl px-6 py-4 rounded-md">
          Driving better business results for 200+ companies.
        </div>

        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg" alt="Bill & Melinda Gates Foundation" className="h-8" />
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg" alt="Midjourney" className="h-8" />
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg" alt="Happy Socks" className="h-8" />
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg" alt="Vidyard" className="h-8" />
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg" alt="Red Week" className="h-8" />
          <img src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg" alt="Product Madness" className="h-8" />
        </div>
      </div>
    </div>
      </section>
    </>
  )
}
