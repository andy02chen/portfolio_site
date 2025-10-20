import { useState, type SetStateAction } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [nav, setNav] = useState('home');

  const [showHamburger, setShowHamburger] = useState(true);
  const [showCross, setShowCross] = useState(false);
  const [animatingHamburger, setAnimatingHamburger] = useState(false);
  const [animatingCross, setAnimatingCross] = useState(false);

  const handleHamburgerClick = () => {
    setShowCross(true);
    setAnimatingHamburger(true);
    setTimeout(() => {
      setAnimatingCross(true);
      setShowHamburgerMenu(true);
    }, 50);
    setShowHamburger(false);
  };

  const handleCrossClick = () => {
    setShowHamburgerMenu(false);
    setAnimatingCross(false);
    setShowHamburger(true);
    setTimeout(() => {
      setAnimatingHamburger(false);
    }, 50);
    setShowCross(false);
  };

  const handleNavClick = (link: SetStateAction<string>) => {
    setNav(link);
    handleCrossClick();
  };

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = window.innerWidth >= 1024 ? 64 : 73; // lg breakpoint
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ 
      top: elementPosition - navbarHeight, 
      behavior: 'smooth' 
    });
  }
};

  return (
    <main className="min-h-dvh w-full bg-[var(--dark-blue)] text-[var(--white)]
      grid-background pt-[73px] lg:pt-16
      scroll-smooth
    ">
      <nav className="font-ubuntu w-full lg:h-16 border-b border-[var(--light-yellow)] bg-[var(--dark-blue)] fixed top-0 left-0 right-0 z-50">

        {/* Mobile Nav Bar */}
        <div className={`lg:hidden w-full
          ${showHamburgerMenu? "border-t border-l border-r border-[var(--light-yellow)]" : ""}`}>
          
          <div className="relative w-10 h-10 m-4">
            {/* Menu Button */}
            {showHamburger &&
              <button className={`absolute top-0 left-0 w-10 h-10 transition-all duration-500
              ${animatingHamburger ? 
              'opacity-0 rotate-180' : 
              'opacity-100 rotate-0'}`}
                onClick={handleHamburgerClick}
              >
                <svg className="w-full h-full" viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V72.6087H298.445L334 3.84695e-06L0 0Z" fill="white"/>
                <path d="M0 261.391V334H237.744L266.068 261.391L0 261.391Z" fill="white"/>
                <path d="M0 130.696V203.304H268.095L300.034 130.696L0 130.696Z" fill="#FFFF33"/>
                </svg>
              </button>
            }

            {/* Cross Button */}
            {showCross &&
              <button 
                className={`absolute top-0 left-0 w-10 h-10 transition-all duration-500
                  ${animatingCross 
                    ? 'opacity-100 rotate-0' 
                    : 'opacity-0 -rotate-180'
                  }`}
                onClick={handleCrossClick}
              >
                <svg className="h-full w-full" viewBox="0 0 334 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M166.667 214.14L56.9036 323.904C43.8861 336.921 22.7806 336.921 9.76311 323.904C-3.25437 310.886 -3.25437 289.781 9.76311 276.763L119.526 167L9.76311 57.2369C-3.25437 44.2195 -3.25437 23.114 9.76311 10.0965C22.7806 -2.92099 43.8861 -2.92099 56.9036 10.0965L166.667 119.86L276.43 10.0965C289.447 -2.92099 310.553 -2.92099 323.57 10.0965C336.588 23.114 336.588 44.2195 323.57 57.2369L213.807 167L323.57 276.763C336.588 289.781 336.588 310.886 323.57 323.904C310.553 336.921 289.447 336.921 276.43 323.904L166.667 214.14Z" fill="#323232"/>
                  <mask id="mask0_217_20" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="334" height="334">
                  <path d="M166.667 214.14L56.9036 323.904C43.8861 336.921 22.7806 336.921 9.76311 323.904C-3.25437 310.886 -3.25437 289.781 9.76311 276.763L119.526 167L9.76311 57.2369C-3.25437 44.2195 -3.25437 23.114 9.76311 10.0965C22.7806 -2.92099 43.8861 -2.92099 56.9036 10.0965L166.667 119.86L276.43 10.0965C289.447 -2.92099 310.553 -2.92099 323.57 10.0965C336.588 23.114 336.588 44.2195 323.57 57.2369L213.807 167L323.57 276.763C336.588 289.781 336.588 310.886 323.57 323.904C310.553 336.921 289.447 336.921 276.43 323.904L166.667 214.14Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_217_20)">
                  <path d="M-233.334 -233L-233.334 567H566.666V-233H-233.334Z" fill="white"/>
                  </g>
                  <path d="M9.76311 57.9036C-3.25437 44.8861 -3.25437 23.7806 9.76311 10.7631C22.7806 -2.25437 43.8861 -2.25437 56.9036 10.7631L323.57 277.43C336.588 290.447 336.588 311.553 323.57 324.57C310.553 337.588 289.447 337.588 276.43 324.57L9.76311 57.9036Z" fill="#D8D8D8"/>
                  <mask id="mask1_217_20" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="1" width="334" height="334">
                  <path d="M9.76311 57.9036C-3.25437 44.8861 -3.25437 23.7806 9.76311 10.7631C22.7806 -2.25437 43.8861 -2.25437 56.9036 10.7631L323.57 277.43C336.588 290.447 336.588 311.553 323.57 324.57C310.553 337.588 289.447 337.588 276.43 324.57L9.76311 57.9036Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_217_20)">
                  <path d="M533.334 -199H-266.666V601H533.334V-199Z" fill="#FFFF33"/>
                  </g>
                </svg>
              </button>
            }
          </div>

          {/* Menu */}
          <div className={`w-full bg-[var(--dark-blue)] flex flex-col 
          transition-all duration-500 ease-in-out
          ${showHamburgerMenu 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
          }`}>
            <ul className="flex flex-col text-2xl sm:text-3xl text-[var(--white)]">
              <li className={`w-full border-l-[5px] overflow-hidden text-ellipsis whitespace-nowrap
                ${ nav === 'home'? "bg-[var(--light-blue)] border-[var(--light-yellow)]" : 
                "bg-[var(--dark-blue)] border-transparent" }`}>
                <a 
                  href="#home" 
                  draggable="false" 
                  className="flex flex-row items-center gap-4 py-5 px-6"
                  onClick={(e) => {e.preventDefault();setNav('home');scrollToSection('home');handleNavClick('home')}}
                >
                  <div className="h-12 w-12 flex-shrink-0">
                    <svg className="h-full w-full" viewBox="0 0 291 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 140.003V309H274V140.003L145.5 23L17 140.003Z" fill="#FFD700" stroke="#1F2937" strokeWidth="33.3333" strokeLinecap="square"/>
                    </svg>
                  </div>
                  Home
                </a>
              </li>

              <li className={`w-full border-l-[5px] overflow-hidden text-ellipsis whitespace-nowrap
                ${ nav === 'about_me'? "bg-[var(--light-blue)] border-[var(--light-yellow)]" : 
                "bg-[var(--dark-blue)] border-transparent" }`}>
                <a 
                  href="#about_me" 
                  draggable="false" 
                  className="flex flex-row items-center gap-4 py-5 px-6"
                  onClick={(e) => {e.preventDefault();setNav('about_me');scrollToSection('about_me');handleNavClick('about_me')}}
                >
                  <div className="h-12 w-12 flex-shrink-0">
                    <svg className="h-full w-full" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5 0.811707C14.15 0.811707 0 14.9977 0 32.3919C0 49.786 14.15 63.972 31.5 63.972C48.85 63.972 63 49.786 63 32.3919C63 14.9977 48.85 0.811707 31.5 0.811707ZM31.5 59.9618C16.35 59.9618 4 47.5804 4 32.3919C4 17.2033 16.35 4.82188 31.5 4.82188C46.65 4.82188 59 17.2033 59 32.3919C59 47.5804 46.65 59.9618 31.5 59.9618Z" fill="#FFD700"/>
                    <path d="M33.5 27.6298H29.5V47.6807H33.5V27.6298Z" fill="#FFD700"/>
                    <path d="M33.5 18.1056H29.5V22.1158H33.5V18.1056Z" fill="#FFD700"/>
                    </svg>
                  </div>
                  About Me
                </a>
              </li>

              <li className={`w-full border-l-[5px] overflow-hidden text-ellipsis whitespace-nowrap
                ${ nav === 'projects'? "bg-[var(--light-blue)] border-[var(--light-yellow)]" : 
                "bg-[var(--dark-blue)] border-transparent" }`}>
                <a 
                  href="#projects" 
                  draggable="false" 
                  className="flex flex-row items-center gap-4 py-5 px-6"
                  onClick={(e) => {e.preventDefault();setNav('projects');scrollToSection('projects');handleNavClick('projects')}}
                >
                  <div className="h-12 w-12 flex-shrink-0">
                    <svg className="h-full w-full" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M70 10.7328C70 4.9191 65.299 0.206116 59.5 0.206116H10.5C4.70085 0.206116 0 4.9191 0 10.7328V42.313C0 48.1269 4.70085 52.8397 10.5 52.8397H31.5V56.3486H24.5C22.567 56.3486 21 57.9195 21 59.8575C21 61.7955 22.567 63.3664 24.5 63.3664H45.5C47.433 63.3664 49 61.7955 49 59.8575C49 57.9195 47.433 56.3486 45.5 56.3486H38.5V52.8397H59.5C65.299 52.8397 70 48.1269 70 42.313V10.7328ZM59.5 7.22393C61.433 7.22393 63 8.79494 63 10.7328V42.313C63 44.251 61.433 45.8219 59.5 45.8219H10.5C8.56695 45.8219 7 44.251 7 42.313V10.7328C7 8.79494 8.56695 7.22393 10.5 7.22393H59.5Z" fill="#FFD700"/>
                    </svg>
                  </div>
                  Projects
                </a>
              </li>

              <li className={`w-full border-l-[5px] overflow-hidden text-ellipsis whitespace-nowrap
                ${ nav === 'contact'? "bg-[var(--light-blue)] border-[var(--light-yellow)]" : 
                "bg-[var(--dark-blue)] border-transparent" }`}>
                <a 
                  href="#contact" 
                  draggable="false" 
                  className="flex flex-row items-center gap-4 py-5 px-6"
                  onClick={(e) => {e.preventDefault();setNav('contact');scrollToSection('contact');handleNavClick('contact')}}
                >
                  <div className="h-12 w-12 flex-shrink-0">
                    <svg className="h-full w-full" viewBox="0 0 53 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 63.4397C0 64.3171 0.348995 65.1586 0.970209 65.7791C1.59142 66.3995 2.43397 66.7481 3.3125 66.7481H49.6875C50.566 66.7481 51.4086 66.3995 52.0298 65.7791C52.651 65.1586 53 64.3171 53 63.4397V3.88854C53 3.01109 52.651 2.16959 52.0298 1.54915C51.4086 0.928701 50.566 0.580139 49.6875 0.580139H3.3125C2.43397 0.580139 1.59142 0.928701 0.970209 1.54915C0.348995 2.16959 0 3.01109 0 3.88854V63.4397ZM26.5 18.7763C27.8103 18.7763 29.0912 19.1644 30.1807 19.8915C31.2701 20.6185 32.1193 21.6519 32.6207 22.861C33.1221 24.07 33.2533 25.4005 32.9977 26.684C32.7421 27.9675 32.1111 29.1465 31.1846 30.0719C30.2581 30.9973 29.0776 31.6275 27.7925 31.8828C26.5073 32.1381 25.1753 32.007 23.9647 31.5062C22.7542 31.0054 21.7195 30.1573 20.9915 29.0692C20.2635 27.9811 19.875 26.7018 19.875 25.3931C19.875 23.6382 20.573 21.9552 21.8154 20.7143C23.0578 19.4734 24.7429 18.7763 26.5 18.7763ZM13.9489 47.609C14.837 44.9877 16.5254 42.7103 18.7768 41.0973C21.0282 39.4842 23.7292 38.6167 26.5 38.6167C29.2708 38.6167 31.9718 39.4842 34.2232 41.0973C36.4746 42.7103 38.163 44.9877 39.0511 47.609C39.2033 48.103 39.2366 48.6259 39.1484 49.1352C39.0602 49.6446 38.8529 50.1259 38.5433 50.5401C38.2338 50.9544 37.8308 51.2898 37.367 51.5192C36.9033 51.7486 36.3919 51.8655 35.8744 51.8603H17.1588C16.6401 51.8657 16.1275 51.7495 15.662 51.5208C15.1966 51.2922 14.7915 50.9576 14.4792 50.544C14.1669 50.1304 13.9563 49.6494 13.8642 49.1396C13.772 48.6298 13.8011 48.1055 13.9489 47.609Z" fill="#FFD700"/>
                    </svg>
                  </div>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
          
        {/* Desktop Nav Bar */}
          <ul
            className="text-[var(--white)] select-none hidden lg:flex justify-between items-center 
                      px-4 lg:px-8 
                      h-12 lg:h-16"
          >
          <div className="w-1/2 hidden lg:flex text-xl">
            <li><a href="#home" 
              className="relative 
              text-white hover:text-transparent bg-clip-text 
              bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
              hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
              draggable="false"
              onClick={(e) => {
                e.preventDefault();
                setNav("home");
                window.scrollTo({ top: 0});
              }}
              >
                Andy Chen</a>
            </li>
          </div>

          <div className="hidden lg:flex justify-items-center text-xl gap-8 xl:gap-16">
            <li>
              <a href="#home" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false"
                onClick={(e) => {
                  e.preventDefault();
                  setNav("home");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                >
                  Home
              </a>
            </li>
            <li>
              <a href="#about_me" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false"
                onClick={(e) => {e.preventDefault();setNav('about_me');scrollToSection('about_me')}}>
                  About Me
              </a>
            </li>
            <li>
              <a href="#projects" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false"
                onClick={(e) => {e.preventDefault();setNav('projects');scrollToSection('projects')}}>
                  Projects
              </a>
            </li>
            <li>
              <a href="#contact" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false"
                onClick={(e) => {e.preventDefault();setNav('contact');scrollToSection('contact')}}>
                  Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>

      {/* Home Page */}
      <Home setNav={setNav}/>

      {/* About Me */}
      <About/>

      {/* Projects */}
      <Projects/>
    </main>
  )
}

export default App