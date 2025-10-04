function App() {

  return (
    <main className="min-h-dvh w-full bg-[var(--dark-blue)] text-[var(--white)]">
      <nav>
        <ul className="text-[var(--white)] select-none flex justify-between items-center bg-blue-400 h-16 px-4 lg:px-8">

          <div className="lg:hidden">
            <svg
              className="w-12 h-8"
              viewBox="0 0 78 51" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V11.087H69.6968L78 0H0Z" fill="white"/>
              <path d="M0 39.9131V51H55.5212L62.1356 39.9131H0Z" fill="white"/>
              <path d="M0 19.9565V31.0435H62.609L70.0678 19.9565H0Z" fill="#FFFF33"/>
            </svg>
          </div>

          <div className="w-1/2 hidden lg:flex">
            <li><a href="#home">Andy Chen</a></li>
          </div>
          
          <div className="hidden lg:flex justify-evenly justify-items-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#about_me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
        </ul>
      </nav>
    </main>
  )
}

export default App