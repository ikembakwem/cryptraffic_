import classes from "./Footer.module.css";
import { PageLinks } from "./PageLinks";
import {
  firstColLinks,
  secondColLinks,
  thirdColLinks,
} from "../utils/linkData";

export const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-container pt-12 px-6 mx-auto pb-6 md:pt-28">
        <div className="w-full">
          <div className={classes.gridContainer}>
            <section className="flex flex-col pb-8 px-2">
              <div>
                <div className="text-2xl leading-tight font-bold text-primary">
                  Cryptraffic
                </div>
              </div>
              <div className="flex gap-x-2 pt-4 font-light text-gray-60">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
              </div>
              <div className="text-gray-60">
                Cryptraffic &copy; {new Date().getFullYear()}
              </div>
            </section>
            <section className={classes.pageLinksContainer}>
              <PageLinks data={firstColLinks} />
              <PageLinks data={secondColLinks} />
              <PageLinks data={thirdColLinks} />
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};
