import { useState } from "react";
import { normalizeModuleId } from "vite/module-runner";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<number | null>(null);

  const changeProject = (numberClicked: number|null) => {
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
            <h1 className="font-furore font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
            select-none">
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
                className={`border border-[var(--yellow)] p-10 w-full cursor-pointer
                ${projectSelected === 1 ? "bg-[var(--yellow)]" : "bg-transparent" }`}
                onClick={() => changeProject(1)}
              >
                01
              </div>
              <div
                className={`border border-[var(--yellow)] p-10 w-full cursor-pointer
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent" }`}
                onClick={() => changeProject(2)}
              >
                02
              </div>
              <div
                className={`border border-[var(--yellow)] p-10 w-full cursor-pointer
                ${projectSelected === 3 ? "bg-[var(--yellow)]" : "bg-transparent" }`}
                onClick={() => changeProject(3)}
              >
                03
              </div>
              <div
                className={`border border-[var(--yellow)] p-10 w-full cursor-pointer
                ${projectSelected === 4 ? "bg-[var(--yellow)]" : "bg-transparent" }`}
                onClick={() => changeProject(4)}
              >
                04
              </div>
            </div>

            {/* Description Div */}
            <div
              className={`transition-all duration-500 overflow-hidden flex items-center justify-center
                ${projectSelected !== null 
                  ? "w-[75%] max-h-full opacity-100 p-4" 
                  : "w-0 opacity-0 p-0"
                }`}
            >
              <svg className="w-full h-auto" viewBox="0 0 675 588" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 90V0H566L613 90H0Z" fill="#FFD700"/>
                <rect x="2" y="92" width="671" height="472" fill="#1F2937" stroke="#FFD700" strokeWidth="4"/>
                <rect x="271" y="109" width="379" height="20" fill="white"/>
                <rect x="245" y="111" width="15" height="15" fill="white"/>
                <path d="M31 543L82.2381 584.642H110.24L59.0022 543H31Z" fill="white" stroke="white"/>
                <path d="M92 545L143.238 586.642H171.24L120.002 545H92Z" fill="white" stroke="white"/>
                <path d="M146 545L197.238 586.642H225.24L174.002 545H146Z" fill="white" stroke="white"/>

                {/* Back Button */}
                <g
                  className="cursor-pointer transition-all"
                  onClick={() => changeProject(null)}
                >
                  {/* Transparent hit area */}
                  <rect
                    x="600"  // slightly beyond your path bounds
                    y="15"
                    width="80"
                    height="60"
                    fill="transparent"
                  />

                  {/* Actual visible shape */}
                  <path
                    d="M667 29.6981H661.72V41.1371H612.106L627.51 25.7332L623.777 22L602 43.7768L623.777 65.5536L627.51 61.8206L612.106 46.4166H667V29.6981Z"
                    fill="#FFD700"
                    className="transition-all group-hover:fill-yellow-300"
                  />
                </g>

                <text
                  x="5%"
                  y="8%"
                  textAnchor="start"
                  dominantBaseline="middle"
                  fill="var(--dark-blue)"
                  fontSize="30"
                  fontWeight="normal"
                  fontFamily='furore'
                  className="select-none"
                >
                  Project Name
                </text>
                
                <foreignObject x="20" y="140" width="630" height="380">
                  <div className="text-[var(--yellow)] text-sm font-['Ubuntu_Sans_Mono'] leading-relaxed p-2">
                    <p className="mb-2">
                      This is your first paragraph. It will wrap automatically and stay within the bounds.
                    </p>
                    <p className="mb-2">
                      This is your second paragraph with more content that can span multiple lines.fdsafdsafsdafasdfdsafdsafdas
                      fdsafsdafsd
                    </p>
                    <p>
                      Add as many paragraphs as you need. You can also use regular HTML styling.
                    </p>
                  </div>
                </foreignObject>

              </svg>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="bg-red-950 w-[50%] h-full">Images</div>
      </div>
    </section>
  );
}
