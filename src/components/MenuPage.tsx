const MenuPage = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <div className="h-screen desktop:hidden">
      <div className="absolute z-50 w-full">
        <nav>
          <div className="flex flex-col font-medium">
            <a href="/" onClick={onClick} className="py-5 px-6">
              <span>Home</span>
            </a>
            <a href="#" onClick={onClick} className="py-5 px-6">
              <span>Articles</span>
            </a>
            <a href="#" onClick={onClick} className="py-5 px-6">
              <span>Projects</span>
            </a>
            <a href="#" onClick={onClick} className="py-5 px-6">
              <span>About Me</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row py-5 px-6 gap-3">
            <button className="cursor-pointer flex justify-center items-center w-full h-14 max-w-full text-center rounded-full bg-primary text-white">
              <span className="font-semibold">Get started</span>
            </button>
            <button className="cursor-pointer flex justify-center items-center w-full h-14 max-w-full text-center rounded-full bg-lightGray">
              <span className="font-semibold">Sign in</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default MenuPage;
