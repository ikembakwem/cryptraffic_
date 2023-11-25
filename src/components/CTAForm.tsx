import React from "react";

export const CTAForm = () => {
  return (
    <div className="flex items-start flex-col min-w-0 w-full largePhone:min-w-auto md:min-w-ctaForm">
      <form action="" className="flex flex-col largePhone:flex-row w-full">
        <div className="flex grow relative border border-line rounded">
          <input
            type="text"
            className="grow basis-0 p-5 rounded text-lg text-midnightSteel h-auto w-full"
            placeholder="Email address"
          />
        </div>
        <div className="mt-2 largePhone:ml-4 largePhone:mt-0">
          <button className="relative w-full rounded bg-indigo-800 text-white leading-tighter cursor-pointer p-6 border border-indigo-800">
            <span className="flex items-center justify-center w-full flex-nowrap whitespace-nowrap font-medium">
              <div className="px-6">Get started</div>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
