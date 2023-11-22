const MenuPage = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <div className="h-screen desktop:hidden">
      <div className="absolute z-50 w-full px-4">
        <nav>
          <div className="flex flex-col gap-4 py-4 font-medium text-lg">
            <a href="/" onClick={onClick}>
              <span>Home</span>
            </a>
            <a href="/articles" onClick={onClick}>
              <span>Articles</span>
            </a>
            <a href="/projects" onClick={onClick}>
              <span>Projects</span>
            </a>
            <a href="/about" onClick={onClick}>
              <span>About Me</span>
            </a>
          </div>
          <div className="text-indigo-700 font-medium">
            <button>Hire Me</button> <span className="text-black">or</span>{" "}
            <button>Get in touch</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default MenuPage;
