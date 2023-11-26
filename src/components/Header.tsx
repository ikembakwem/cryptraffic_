import { useState, useEffect } from "react";
import MenuPage from "./MenuPage";
import { MenuToggle } from "./MenuToggle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="fixed bg-white top-0 z-30 w-full transition-transform duration-300 border-b border-gray-50">
        <div className="flex justify-between max-w-container items-center mx-auto px-4 relative h-16">
          <div className="flex items-center pb-2 md:basis-3/12">
            <a href="/">
              <div className="text-xl leading-tight font-bold text-primary">
                Cryptraffic
              </div>
            </a>
          </div>
          <nav className="hidden desktop:inline-flex justify-center gap-x-6 desktop:basis-6/12">
            <a href="/">Explore</a>
            <a href="#">Individuals</a>
            <a href="#">Businesses</a>
            <a href="#">Company</a>
          </nav>
          <div className="flex items-center justify-end gap-x-2 basis-3/12">
            <div className="hidden desktop:flex items-center gap-x-4">
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full h-10 py-3 px-6 bg-lightGray">
                Sign in
              </button>
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full h-10 py-3 px-6 bg-primary text-white">
                Get started
              </button>
            </div>
            <div className="desktop:hidden inline-flex items-center">
              <MenuToggle
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => (prev = !prev))}
              />
            </div>
          </div>
        </div>
        {isOpen ? <MenuPage onClick={() => setIsOpen(false)} /> : null}
      </header>
      <div className="h-16"></div>
    </>
  );
};
