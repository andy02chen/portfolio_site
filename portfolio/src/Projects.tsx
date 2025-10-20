export default function Projects() {
  return(
    <section id="projects" className="w-full min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-64px)]
flex items-center justify-center ">
      <div className="w-[85vw] h-[85vh] flex">
        {/* Left Div */}
        <div className="w-[50%] h-full flex flex-col bg-yellow-900">
          <div>
            <h1 className="font-furore font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              \\ Pr()jects __
            </h1>
          </div>
          
          <div className="flex flex-1">
            {/* Number Selector Div */}
            <div className="flex flex-col justify-evenly items-center w-[25%] h-full bg-green-900">
              <div>
                01
              </div>
              <div>
                01
              </div>
              <div>
                01
              </div>
              <div>
                01
              </div>
            </div>

            {/* Description Div */}
            <div className="w-[75%] bg-blue-900">
              Description
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="bg-red-950 w-[50%] h-full">
          Images
        </div>
      </div>
    </section>
  )
}