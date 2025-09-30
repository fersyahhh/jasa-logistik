import { useState } from 'react';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false)
  }

  return (
    <header className="w-full fixed z-50">
      <div className="mx-0">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-10 bg-white/80">
          {/* Logo */}
          <div>
            <h1 className="font-montserrat text-primary text-2xl font-bold lg:text-3xl">
              Jasa <span className="text-blue-500">Logistik</span>
            </h1>
          </div>

          {/* Nav-links */}
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              onClick={handleClick}
              className={`relative z-[9999] transition-all duration-300 ease-in-out sm:hidden ${isActive ? 'hamburger-active' : ''}`}
            >
              <span className="hamburger-transition hamburger-line origin-top-left"></span>
              <span className="hamburger-transition hamburger-line"></span>
              <span className="hamburger-transition hamburger-line origin-bottom-left"></span>
            </button>
            <nav
              className={`absolute top-18 -right-60 z-[999] mx-auto w-full max-w-[200px] rounded-lg bg-blue-600/90 px-4 py-3 sm:px-0 text-lg text-white opacity-0 transition-all duration-700 ease-in-out sm:static sm:max-w-none sm:bg-transparent sm:text-blue-600 sm:opacity-100 ${isActive ? 'nav-menu' : ''}`}
            >
              <ul className="font-inter lg:text-lg sm:gap-6 lg:gap-10 text-base sm:flex">
                <li className="mb-2 sm:mb-0">
                  <a href="#home" onClick={handleLinkClick}>Beranda</a>
                </li>
                <li className="mb-2 sm:mb-0">
                  <a href="#about" onClick={handleLinkClick}>Tentang Kami</a>
                </li>
                <li className="mb-2 sm:mb-0">
                  <a href="#services" onClick={handleLinkClick}>Layanan</a>
                </li>
                <li className="mb-2 sm:mb-0">
                  <a href="#contact" onClick={handleLinkClick}>Kontak</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
