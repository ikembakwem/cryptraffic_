import classes from "./HeroSection.module.css";
import { HeroPill } from "./HeroPill";

export const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="flex items-center max-w-container px-14 py-6 mx-auto">
        <div className={classes.leftContainer}>
          <HeroPill />
          <h1>Hello</h1>
          <p></p>
          <div></div>
        </div>
        <div className={classes.rightContainer}></div>
      </div>
    </section>
  );
};
