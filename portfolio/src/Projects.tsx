import { useState } from "react";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<number | null>(null);

  const changeProject = (numberClicked: number) => {
    if (numberClicked === projectSelected) {
      setProjectSelected(null);
    } else {
      setProjectSelected(numberClicked);
    }
  };

  return (
    <section
      id="projects"
      className="w-full min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-64px)] flex items-center justify-center"
    >
      <div className="w-[85vw] h-[85vh] flex">
        {/* Left Div */}
        <div className="w-[50%] h-full flex flex-col">
          <div>
            <h1 className="font-furore font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              \\ Pr()jects __
            </h1>
          </div>

          <div className="flex flex-1 gap-8">
            {/* Number Selector Div */}
            <div
              className={`flex flex-col justify-evenly items-center h-full font-furore text-2xl transition-all duration-500
              ${projectSelected === null ? "w-full" : "w-[25%]"}`}
            >
              <div
                className="border border-[var(--yellow)] p-10 w-full cursor-pointer"
                onClick={() => changeProject(1)}
              >
                01
              </div>
              <div className="border border-[var(--yellow)] p-10 w-full cursor-pointer"
                onClick={() => changeProject(2)}>
                02
              </div>
              <div className="border border-[var(--yellow)] p-10 w-full cursor-pointer"
                onClick={() => changeProject(3)}>
                03
              </div>
              <div className="border border-[var(--yellow)] p-10 w-full cursor-pointer"
                onClick={() => changeProject(4)}>
                04
              </div>
            </div>

            {/* Description Div */}
            <div
              className={`transition-all duration-500 overflow-hidden bg-blue-900
              ${projectSelected !== null ? "w-[75%] h-auto opacity-100" : "w-0 h-0 opacity-0"}`}
            >
              Description
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="bg-red-950 w-[50%] h-full">Images</div>
      </div>
    </section>
  );
}
