import { useEffect, useRef, useState } from "react";

import proj1 from './assets/projects/proj1.png';
import proj1_1 from './assets/projects/proj1_1.png';
import proj1_2 from './assets/projects/proj1_2.png';
import proj1_3 from './assets/projects/proj1_3.png';
import proj1_4 from './assets/projects/proj1_4.png';
import proj1_5 from './assets/projects/proj1_5.png';
import proj1_6 from './assets/projects/proj1_6.png';

import proj2_1 from './assets/projects/proj2_1.png';
import proj2_2 from './assets/projects/proj2_2.png';
import proj2_3 from './assets/projects/proj2_3.png';
import proj2_4 from './assets/projects/proj2_4.png';
import proj2_5 from './assets/projects/proj2_5.png';

import proj3 from './assets/projects/proj3.png';
import proj3_1 from './assets/projects/proj3_1.png';

import proj4 from './assets/projects/proj4.png';
import proj4_1 from './assets/projects/proj4_1.png';
import proj4_2 from './assets/projects/proj4_2.png';
import proj4_3 from './assets/projects/proj4_3.png';
import proj4_4 from './assets/projects/proj4_4.png';
import proj4_5 from './assets/projects/proj4_5.png';
import proj4_6 from './assets/projects/proj4_6.png';
import proj4_7 from './assets/projects/proj4_7.png';

import proj5 from './assets/projects/proj5.png'; 
import proj5_1 from './assets/projects/proj5_1.png';
import proj5_2 from './assets/projects/proj5_2.png';
import proj5_3 from './assets/projects/proj5_3.png';

const projects = [
  {
    id: 0,
    title: "Anime Calendar Website",
    description: `An interactive Anime Calendar built with Python (Flask) and React that connects directly to MyAnimeList through API integration.<br><br>
    The site allows users to track anime release schedules at a glance, making it easy to plan weekly viewing without having to remember every air time.<br><br>
    It also analyzes viewing habits and presents them through interactive charts and graphs, turning anime statistics into clear insights.<br><br>
    Through this project, I learned about UI and UX design, secure data handling, and database setup. I also gained experience building API endpoints, managing cookies for authentication, and deploying the full stack using cloud computing and virtual machines.<br><br>
    The backend was designed to efficiently filter and organize user data, powering responsive analytics dashboards tailored to each profile.`,

    image: [proj1,proj1_1,proj1_2,proj1_3,proj1_4,proj1_5,proj1_6],
  },
  {
    id: 1,
    title: "AirTable Clone",
    description: `A fully functional Airtable-style web app built with the T3 stack that supports creating bases, tables, and dynamic columns.<br><br>
    Includes rich data management features such as inline cell editing, filtering, sorting, and full-text search. It is optimized with infinite scrolling and virtualized rendering for smooth performance even with large datasets.<br><br>
    This project was originally developed as part of a software development consultancy trial, completed while working full-time, and delivered within just two weeks.<br><br>
    Through the process, I strengthened my skills in full-stack architecture, component-driven design, and learning unfamiliar technologies under tight deadlines.`,

    image: [proj2_1,proj2_2,proj2_3,proj2_4,proj2_5],
  },
  {
    id: 2,
    title: "Ichibankuji Rate calculator",
    description: `A responsive web app that helps users calculate their chances of winning specific prizes in Ichiban Kuji, a popular Japanese lottery where every ticket guarantees a prize.<br><br>
    Built with React and Tailwind CSS, the app features a clean and mobile-friendly interface designed for quick use directly in-store.<br><br>
    Users can input the number of remaining prizes and total tickets to calculate real-time win rates. It supports dynamic prize tiers, live percentage updates, and automatic recalculations whenever inputs change.<br><br>
    The interface was designed to be intuitive and beginner-friendly, with clear visual cues to make odds estimation simple and fast.<br><br>
    This app was actually tested in-store, leading to one third-prize win for me and first and second prizes for a friend.`,
    image: [proj3,proj3_1],
  },
  {
    id: 3,
    title: "Fake E-commerce Store",
    description: `
    Developed a university eCommerce web app with features for product browsing, shopping cart management, and simulated checkout.<br><br>
    Implemented secure login with multiple roles and permissions.<br><br>
    Started as a duo and completed the majority of development, then added a third team member and delegated tasks to ensure meaningful contributions.<br><br>
    Managed task distribution and team communication to keep the project on track.`,
    image: [proj4,proj4_1,proj4_2,proj4_3,proj4_4,proj4_5,proj4_6,proj4_7],
  },
  {
    id: 4,
    title: "Java Bomberman Game",
    description: `
    Developed a 2D game in Java as part of a semester project, applying object-oriented principles such as abstract classes and interfaces.<br><br>
    The game reads level configurations from text files, handles collision detection for walls and bomb explosions, and features animated sprites.<br><br>
    The coding portion of the assignment scored 94%, reflecting the quality and functionality of the implementation.
    `,
    image: [proj5,proj5_1,proj5_2,proj5_3],
  },
]

type HomeProps = {
  setNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function Projects({ setNav }: HomeProps) {
  const [projectSelected, setProjectSelected] = useState<number | null>(null);

  const [textOrImage, setTextOrImage] = useState<string>('image');

  const changeProject = (numberClicked: number|null) => {
    if (numberClicked === projectSelected) {
      setProjectSelected(null);
    } else {
      setProjectSelected(numberClicked);
    }
  };

  const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setNav('projects');
        },
        { threshold: 0.5 } // 50% visible
      );
  
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [setNav]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (projectSelected !== null && projects[projectSelected].image.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          (prev + 1) % projects[projectSelected].image.length
        );
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [projectSelected, currentImageIndex]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [projectSelected]);

  return (
    <section
      ref={ref}
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
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`h-24 border border-[var(--yellow)] flex justify-between items-center w-full cursor-pointer select-none
                    transition-all duration-300 p-4 xl:p-8 3xl:p-8 text-[var(--yellow)]
                    ${projectSelected === project.id ? "bg-[var(--yellow)]" : "bg-transparent hover:bg-[var(--yellow)]/10"}`}
                  onClick={() => changeProject(project.id)}
                >
                  <h1 className={`transition-colors duration-300
                    ${projectSelected === project.id ? "text-[var(--dark-blue)]" : ""}
                    `}>
                    {String(project.id + 1).padStart(2, '0')}
                  </h1>
                  <h1 className={`transition-colors duration-300 text-xs sm:text-base xl:text-2xl
                    ${projectSelected === project.id ? "text-[var(--dark-blue)] opacity-100" : ""}
                    xl:${projectSelected === null ? "" : "text-[var(--dark-blue)] xl:max-w-0 xl:opacity-0"}
                    `}>
                    {project.title}
                  </h1>
                </div>
              ))}
            </div>

            {/* Description Div */}
            <div className={`xl:hidden
              ${projectSelected === null && textOrImage === 'text' ? 'flex flex-1 items-center justify-center' : 'hidden'}
              `}>
              <h1 className="font-furore text-4xl">
                [ Select a Project]
              </h1>
            </div>

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
                  {projectSelected !== null && projects[projectSelected].title}
                </text>
                
                <foreignObject x="20" y="140" width="630" height="380">
                  <div className="text-[var(--yellow)] text-md xl:text-sm font-['Ubuntu_Sans_Mono']
                  leading-relaxed p-2 overflow-y-auto h-full
                  scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-transparent
                  scrollbar-stable-gutter">
                    {projectSelected !== null &&
                      projects[projectSelected].description.split('<br>').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))
                    }
                  </div>
                </foreignObject>

              </svg>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className={`w-full xl:w-[50%] 
          transition-all h-[50%] xl:h-full duration-500 flex-1 xl:flex items-center justify-center mx-auto relative
          ${textOrImage === 'image'? 'flex' : 'hidden'} xl:flex`}>
          {projectSelected !== null ? (
            <>
              <img 
                src={projects[projectSelected].image[currentImageIndex]} 
                alt={`${projects[projectSelected].title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image navigation controls */}
              {projects[projectSelected].image.length > 1 && (
                <>
                  {/* Previous button */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === 0 ? projects[projectSelected].image.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--yellow)]/80 hover:bg-[var(--yellow)]
                    text-[var(--dark-blue)] w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    font-furore"
                    aria-label="Previous image"
                  >
                    {`<`}
                  </button>
                  
                  {/* Next button */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      (prev + 1) % projects[projectSelected].image.length
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--yellow)]/80 hover:bg-[var(--yellow)] 
                    text-[var(--dark-blue)] w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    font-furore"
                    aria-label="Next image"
                  >
                    {`>`}
                  </button>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {projects[projectSelected].image.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-[var(--yellow)] w-6' 
                            : 'bg-[var(--yellow)]/40 hover:bg-[var(--yellow)]/60'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <h1 className="font-furore text-4xl">
              [ Select a Project ]
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}
