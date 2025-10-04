import { useState } from "react";

function App() {

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <main className="min-h-dvh w-full bg-[var(--dark-blue)] text-[var(--white)]">
      <nav className="font-ubuntu">
        <ul className="text-[var(--white)] select-none flex justify-between items-center h-16 px-4 lg:px-8
        border-b border-[var(--light-yellow)]
        ">

          
          <div className="lg:hidden">
            {!showHamburgerMenu &&
              <div className="w-10 h-8"
                onClick={() => setShowHamburgerMenu(true)}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 78 51" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V11.087H69.6968L78 0H0Z" fill="white"/>
                  <path d="M0 39.9131V51H55.5212L62.1356 39.9131H0Z" fill="white"/>
                  <path d="M0 19.9565V31.0435H62.609L70.0678 19.9565H0Z" fill="#FFFF33"/>
                </svg>
              </div>
            }
            
            {showHamburgerMenu && 
              <div className="w-10 h-8"
                onClick={() => setShowHamburgerMenu(false)}
              >
                <svg className="w-full h-full" viewBox="0 0 334 335" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </div>
            }
          </div>

          <div className="w-1/2 hidden lg:flex text-xl">
            <li><a href="#home" 
            className="relative 
            text-white hover:text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
            hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
            draggable="false">Andy Chen</a></li>
          </div>

          <div className="hidden lg:flex justify-items-center text-xl gap-8 xl:gap-16">
            <li>
              <a href="#home" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">Home
              </a>
            </li>
            <li>
              <a href="#about_me" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">About Me
              </a>
            </li>
            <li>
              <a href="#projects" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">Projects
              </a>
            </li>
            <li>
              <a href="#contact" 
                className="relative 
                text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--light-yellow)] to-[var(--light-yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </main>
  )
}

export default App