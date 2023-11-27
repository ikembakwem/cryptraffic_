import classes from "./HeroSection.module.css";
import { HeroPill } from "./HeroPill";
import heroImage from "../assets/images/freeMoney.webp";
import { CTAForm } from "./CTAForm";

export const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-heroContainer px-4 largePhone:px-12 py-6 mx-auto shrink-0">
        <div className="flex items-center">
          <div className={classes.leftContainer}>
            <HeroPill />
            <h1 className="text-darkGray text-4xl largePhone:text-6xl mt-2 mb-4 leading-tighter font-medium max-w-full">
              <span className="inline-block md:max-w-heroCopy">
                Jump start your crypto portfolio
              </span>
            </h1>
            <p className="text-darkGray largePhone:text-xl mb-8 leading-snug largePhone:font-medium">
              Cryptraffic is the best and easiest place to buy and sell
              cryptocurrency. Sign up and get started today.
            </p>
            <CTAForm />
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
