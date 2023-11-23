import BTCIcon from "../assets/icons/bitcoin.svg?react";
import ArrowIcon from "../assets/icons/arrow-forward.svg?react";

export const HeroPill = () => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer text-indigo-800 font-medium hover:underline">
      <BTCIcon />
      Jump start your portfolio
      <ArrowIcon />
    </div>
  );
};
