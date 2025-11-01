import { useState } from "react";

// TODO mobile text or image selected
// TODO when no project is selected maybe default to 1

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<number | null>(null);

  const [textOrImage, setTextOrImage] = useState<string>('image');

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
      className="w-full h-[calc(100vh-73px)] lg:h-[calc(100vh-64px)] flex items-center justify-center"
    >
      <div className="w-[85vw] h-[85vh] flex flex-col xl:flex-row">
        {/* Left Div */}
        <div className={`w-full xl:w-[50%] xl:h-full flex flex-col gap-4
          ${textOrImage === 'image' ? "h-auto" : "h-full"}
          `}>
          <div className="h-auto">
            <h1 className="font-furore font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
            select-none">
              \\ Pr()jects __
            </h1>
          </div>

          <div className="xl:hidden flex gap-4">
            <button
              className={`relative px-6 py-3 border-2 border-[var(--yellow)] text-[var(--yellow)]
                        transform -skew-x-12 hover:bg-[var(--yellow)] hover:text-[var(--dark-blue)]
                        transition-all duration-300
                        ${textOrImage === 'text' ? "bg-[var(--yellow)]" : ""}`}
            onClick={() => setTextOrImage('text')}>
              <span className="block transform skew-x-12 h-5">
                <svg
                viewBox="0 0 372 372"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="372" height="372" fill={`${textOrImage === 'text' ? "var(--dark-blue)" : "var(--yellow)"}`} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M348.75 23.25H23.25V348.75H348.75V23.25ZM69.75 69.75V162.75H116.25V116.25H162.75V255.75H116.25V302.25H255.75V255.75H209.25V116.25H255.75V162.75H302.25V69.75H69.75Z"
                  fill={`${textOrImage === 'text' ? "var(--yellow)" : "var(--dark-blue)"}`}
                />
              </svg>
              </span>
            </button>

            <button
              className={`relative px-6 py-3 border-2 border-[var(--yellow)] text-[var(--yellow)]
                        transform -skew-x-12 hover:bg-[var(--yellow)] hover:text-[var(--dark-blue)]
                        transition-all duration-300
              ${textOrImage === 'image' ? "bg-[var(--yellow)]" : ""}`}
            onClick={() => setTextOrImage('image')}>
              <span className="block transform skew-x-12 h-5">
                <svg
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 50H750V750H50V50ZM300 450L400 550L650 300V650H150V600L300 450ZM325 350C366.421 350 400 316.421 400 275C400 233.579 366.421 200 325 200C283.579 200 250 233.579 250 275C250 316.421 283.579 350 325 350Z"
                    fill={`${textOrImage === 'image' ? "var(--dark-blue)" : "var(--yellow)"}`}
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex flex-col xl:flex-row flex-1
          gap-4 3xl:gap-8 xl:max-h-full overflow-hidden 
          ">
            {/* Number Selector Div */}
            <div
              className={`
                flex flex-col justify-evenly items-center
                h-[200px] xl:h-full
                font-furore text-2xl transition-all duration-500
                overflow-y-auto overflow-x-hidden
                scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-transparent
                scrollbar-stable-gutter
                xl:gap-8
                w-full
                ${projectSelected === null ? "xl:w-full" : "xl:w-auto"}
                xl:max-w-full
              `}
              style={{ scrollbarGutter: 'stable' }}
            >
              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 1 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(1)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 1 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  01
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 1 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>
              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>
              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>
              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>
              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 2 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(2)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  02
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 2 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 3 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(3)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 3 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  03
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 3 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div><div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 4 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(4)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 4 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  04
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 4 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 5 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(5)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 5 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  05
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 5 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

              <div className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                ${projectSelected === 6 ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                onClick={() => changeProject(6)}>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 6 ? "text-[var(--dark-blue)]" : ""}
                  `}>
                  06
                </h1>
                <h1 className={`transition-colors duration-300
                  ${projectSelected === 6 ? "text-[var(--dark-blue)] opacity-100" : ""}
                  xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                  `}>
                  Project Name
                </h1>
              </div>

            </div>

            {/* Description Div */}
            <div
              className={`transition-all h-[50%] xl:h-full duration-500 flex-1 xl:flex items-center justify-center mx-auto
                ${projectSelected !== null 
                  ? "w-full xl:w-[85%] max-h-full opacity-100 p-4" 
                  : "w-0 opacity-0 p-0 max-h-0"
                }
                ${textOrImage === 'text'? 'flex' : 'hidden'}
                `}
            >
              <svg 
                key={projectSelected}
                className="w-full h-full max-h-full object-contain animate-scaleIn"
                viewBox="0 0 675 588"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M0 93V0H566L613 93H0Z" fill="#FFD700"/>
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
        <div className={`w-full xl:w-[50%] 
        transition-all h-[50%] xl:h-full duration-500 flex-1 xl:flex items-center justify-center mx-auto
          ${textOrImage === 'image'? 'flex' : 'hidden'} xl:flex`}>
          <h1 className="font-furore text-4xl">
            [ Select a Project]
          </h1>
        </div>
      </div>
    </section>
  );
}
