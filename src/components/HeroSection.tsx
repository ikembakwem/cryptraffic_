import classes from "./HeroSection.module.css";
import { HeroPill } from "./HeroPill";
import heroImage from "../assets/images/freeMoney.webp";

export const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-heroContainer px-14 py-6 mx-auto w-full">
        <div className="flex items-center">
          <div className={classes.leftContainer}>
            <HeroPill />
            <h1 className="text-6xl mt-2 mb-4 leading-tighter font-medium max-w-full">
              <span className="inline-block md:max-w-heroCopy">
                Jump start your cryptopurse portfolio
              </span>
            </h1>
            <p className="text-xl mb-8 leading-snug font-medium">
              Cryptraffic is the easiest place to buy and sell cryptocurrency.
              Sign up and get started today.
            </p>
            <div className="w-full md:min-w-ctaForm">
              <form action="post" className="flex w-full">
                <div className="flex grow shrink basis-auto relative border border-gray-60/20 rounded">
                  <input
                    type="text"
                    className="grow shrink basis-0 p-5 rounded text-lg h-auto"
                    placeholder="Email address"
                  />
                </div>
                <div className="ml-4">
                  <button className="relative w-full rounded text-white cursor-pointer p-6 border border-indigo-800 bg-indigo-800 leading-tighter">
                    <span className="flex w-full flex-nowrap whitespace-nowrap px-6">
                      Get started
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <img
              src={heroImage}
              alt="Free money"
              className={classes.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
