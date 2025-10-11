
import pfp from './assets/pic.jpg';

type HomeProps = {
  setNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({ setNav }: HomeProps) {

  return(
    <section className="w-full h-screen flex flex-row justify-center items-center">
      {/* Left Div */}
      <div className="w-1/2 h-3/4 flex flex-1 items-center justify-center flex-col gap-4 select-none ">
        {/* Text div */}
        <h1 className='font-furore font-bold text-7xl'>
          HELLO
          <span className='text-7xl text-[var(--yellow)]'>
            .
          </span>
        </h1>
        <div className='w-1/2 flex justify-end'>
          <h1 className='text-4xl font-ubuntu'>
            I'm Andy Chen
          </h1>
        </div>

        <div className='w-1/2 h-1/4 flex flex-row justify-center items-center gap-8'>
          <button className='cursor-pointer group'>
            <a href='#projects'
            onClick={() => setNav("projects")}>
            <svg className='transition-all duration-500' 
                width="339" height="76" viewBox="0 0 339 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 68L53.4921 8H335L295.251 68H18Z" 
                    className="transition-all duration-500 fill-[#FFD700] stroke-[#FFD700]" 
                    strokeWidth="4"/>
              <path d="M1 75L44 1H67.5L24.5 75H1Z" 
                    className="fill-white" 
                    stroke="white"/>
              <path d="M305.03 37.5L275.806 54.4324L275.754 20.6574L305.03 37.5Z" 
                    className="fill-[var(--yellow))] transition-all duration-500 group-hover:fill-[var(--dark-blue)]"/>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--dark-blue)"
                fontSize="24"
                fontWeight="bold"
                fontFamily='Ubuntu sans mono'
                className="transition-all duration-500 "
              >
                View Projects
              </text>
            </svg></a>
          </button>
          <button className='cursor-pointer'>
            <a href='#contact' onClick={() => setNav("contact")}>
              <svg className='transition-all hover:drop-shadow-[0_0_3px_var(--yellow)]' width="325" height="83" viewBox="0 0 325 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 74.2651L39.4921 14.2651H321L281.251 74.2651H4Z" stroke="#FFD700" strokeWidth="4"/>
                <rect x="269" y="58" width="25" height="22.2892" fill="white"/>
                <path d="M63.8654 20.2913L11.0701 20.1987L4.00048 31.2375L56.7958 31.3301L63.8654 20.2913Z" fill="white" stroke="white"/>
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="var(--yellow)"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily='Ubuntu sans mono'
                >
                  Contacts
                </text>
              </svg>
            </a>
          </button>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-1/2 flex flex-1 items-center justify-center">
        {/* PFP */}
        <div className='w-xl lg:w-3xl'>
          <svg className='w-full h-auto' viewBox="0 0 591 504" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="frameClip">
                <path d="M302 2H2V452H152L202 502H502V52H352L302 2Z"/>
              </clipPath>
            </defs>
            <image 
              href={pfp}
              width="500" 
              height="500" 
              x="2" 
              y="2"
              clipPath="url(#frameClip)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path d="M302 2H2V452H152L202 502H502V52H352L302 2Z" stroke="#FFD700" strokeWidth="3" fill="none"/>
            <path d="M564.865 62.7224L462.885 63.4956L449 87.813L550.98 87.0398L564.865 62.7224Z" fill="white" stroke="white"/>
            <path d="M589.865 103.722L487.885 104.496L474 128.813L575.98 128.04L589.865 103.722Z" fill="white" stroke="white"/>
            <rect x="16" y="432" width="43" height="43" fill="white"/>
            <rect x="109" y="466" width="34" height="34" fill="#FFD700"/>
          </svg>
        </div>
      </div>
    </section>
  );
}