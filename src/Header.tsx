import { useState, useEffect } from "react";
import MenuPage from "./MenuPage";
import { MenuToggle } from "./MenuToggle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
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
              <h1>Logo</h1>
            </a>
          </div>
          <nav className="hidden desktop:inline-flex justify-center gap-x-6 desktop:basis-6/12">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/articles">Articles</a>
            <a href="/about">About Me</a>
          </nav>
          <div className="flex items-center justify-end gap-x-2 basis-3/12">
            <div className="hidden desktop:flex items-center gap-x-4">
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full h-10 py-3 px-5 border-2 border-blue-60 bg-blue-700 text-white">
                Hire Me
              </button>
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full h-10 py-2 px-3 border-2 border-blue-700 text-blue-700">
                Get in touch
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
