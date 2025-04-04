import { Link } from 'react-router-dom';
import { navlinks } from '../Navbar/navlinks';

const DropDownMenu = ({ isNavMenuOpen, setIsNavMenuOpen }) => {
  const handleNavheaderLinkClick = () => {
    setTimeout(() => {
      setIsNavMenuOpen(false);
    }, 300);
  };

  return (
    <div
      className={`absolute bg-backgroundColor-primary w-full flex flex-col gap-2 overflow-hidden transition-all duration-500  ${
        isNavMenuOpen
          ? 'max-h-40 shadow-[0_2px_2px_-2px_gray] py-6 bg-backgroundColor-secondary'
          : 'max-h-0 py-0'
      }`}
    >
      {' '}
      {navlinks.map((link) => {
        const { id, text, url } = link;
        return (
          <div key={id} className="flex justify-center items-center gap-[1%]">
            <nav className="grid place-items-center">
              <Link
                to={url}
                className="capitalize relative font-normal text-xl"
                onClick={handleNavheaderLinkClick}
              >
                {text}
              </Link>
            </nav>
            {/* display a | between links (after every link except last one) */}
            {/* {index < navlinks.length - 1 && (
                    <span className="font-thin mr-[5%] text-accent">|</span>
                  )} */}
          </div>
        );
      })}
    </div>
  );
};
export default DropDownMenu;
