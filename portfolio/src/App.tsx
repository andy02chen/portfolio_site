function App() {

  return (
    <main className="min-h-dvh w-full bg-[var(--dark-blue)] text-[var(--white)]">
      <nav className="font-ubuntu">
        <ul className="text-[var(--white)] select-none flex justify-between items-center h-16 px-4 lg:px-8
        border-b border-[var(--yellow)]
        ">

          <div className="lg:hidden">
            <svg
              className="w-10 h-6"
              viewBox="0 0 78 51" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V11.087H69.6968L78 0H0Z" fill="white"/>
              <path d="M0 39.9131V51H55.5212L62.1356 39.9131H0Z" fill="white"/>
              <path d="M0 19.9565V31.0435H62.609L70.0678 19.9565H0Z" fill="#FFFF33"/>
            </svg>
          </div>

          <div className="w-1/2 hidden lg:flex text-xl">
            <li><a href="#home" 
            className="relative 
            font-bold text-white hover:text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow)] bg-[length:0%_100%] 
            hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
            draggable="false">Andy Chen</a></li>
          </div>

          <div className="hidden lg:flex justify-items-center text-xl gap-8 2xl:gap-16">
            <li>
              <a href="#home" 
                className="relative 
                font-bold text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">Home
              </a>
            </li>
            <li>
              <a href="#about_me" 
                className="relative 
                font-bold text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">About Me
              </a>
            </li>
            <li>
              <a href="#projects" 
                className="relative 
                font-bold text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow)] bg-[length:0%_100%] 
                hover:bg-[length:100%_100%] transition-all duration-500 underline-hover" 
                draggable="false">Projects
              </a>
            </li>
            <li>
              <a href="#contact" 
                className="relative 
                font-bold text-white hover:text-transparent bg-clip-text 
                bg-gradient-to-r from-[var(--yellow)] to-[var(--yellow)] bg-[length:0%_100%] 
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