import { useState } from 'react'
import Maincontent from '../MainContent/MainContent';
import ServicesContent from '../MainContent/ServicesContent';


export default function Home() {
 

  return (
    <main className="w-full h-auto">
      {/* <div className="absolute right-0 w-full">
        <img
          src="/assets/images/bg2.jpeg"
          alt=""
          className="w-full h-screen brightness-50 object-cover -z-10 opacity-20"
        />
      </div> */}
      {/* hero */}
      <div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-600/20">
                What are we ? Here are the answer .{" "}
                <a href="#" className="font-semibold text-sm text-red-500">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-7xl font-semibold tracking-tight text-balance text-gray-100 sm:text-6xl">
                Welcome Dear guest !
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-100">
                Bringing your vision to life with creativity, passion, and
                excellence – Tsarasoa Production, where stories come alive!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-100">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* <div className="absolute sm:flex-none right-0 top-1/2">
              <img
                src="/assets/images/background1.png"
                alt=""
                className="w-18 h-96 brightness-90"
              />
            </div> */}
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      {/* section */}
      <Maincontent />
      <ServicesContent />
    </main>
  );
}