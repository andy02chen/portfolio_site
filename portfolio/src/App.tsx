function App() {

  return (
    <main className="bg-(--dark-blue) h-dvh w-dvw">
      <nav className="h-24 w-dvw">
        <ul className="text-(--white) select-none flex justify-between">
          <div className="w-1/2">
            <li><a href="#home">Andy Chen</a></li>
          </div>
          
          <div className="flex justify-evenly justify-items-center">
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