import featureImage from "../assets/images/section-img.webp";
import { FeatureCard } from "./FeatureCard";
import ChartIcon from "../assets/icons/chart.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import LockIcon from "../assets/icons/lock.svg?react";
import MobileIcon from "../assets/icons/mobile.svg?react";

export const FeaturesSection = () => {
  return (
    <section>
      <div className="flex w-full max-w-container mx-auto px-6 desktop:py-6">
        <div className="flex flex-col items-center grow text-center pt-8 pb-16">
          <h2 className="mb-4 text-4xl font-medium">
            Create your cryptocurrency portfolio today
          </h2>
          <p className="text-gray-60">
            Coinbase has a variety of features that make it the best place to
            start trading
          </p>
          <div className="flex flex-col-reverse items-center w-full mt-8 desktop:mt-16 desktop:flex-row desktop:justify-between">
            <div className="flex flex-col mt-10 grow basis-zero desktop:mt-0 desktop:mr-4">
              <FeatureCard
                icon={<ChartIcon />}
                title="Manage your portfolio"
                text="Buy and sell popular digital currencies, keep track of them in the one place."
              />
              <FeatureCard
                icon={<CalendarIcon />}
                title="Recurring buys"
                text="Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
              />
              <FeatureCard
                icon={<LockIcon />}
                title="Vault protection"
                text="For added security, store your funds in a vault with time delayed withdrawals."
              />
              <FeatureCard
                icon={<MobileIcon />}
                title="Mobile apps"
                text="Stay on top of the markets with the Coinbase app for Android or iPhone."
              />
            </div>
            <div className="max-w-sm largePhone:max-w-4xl">
              <picture>
                <source srcSet={featureImage} type="image/webp" />
                <img
                  src={featureImage}
                  alt="Section image"
                  className="w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
