
import background_img from './assets/about_me_background.jpg';

type HomeProps = {
  setNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function About({ setNav }: HomeProps) {
  return(
    <section id="about_me" className="w-full h-[calc(100vh-73px)] lg:h-[calc(100vh-64px)]
    flex items-center justify-center">
      <div className="w-8/10 h-8/10 bg-[var(--light-blue)] border-1 border-[var(--yellow)]
      flex flex-row">

        {/* Left Div */}
        <div className="flex-2 flex flex-col">
          <h1 className="font-furore font-bold text-4xl sm:text-6xl lg:text-7xl px-4 flex justify-center w-3/4">
            About me __
          </h1>

          <div className="flex h-full items-center justify-center">
            <svg className='w-8/10 h-auto' viewBox="0 0 1101 664" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="aboutMeClip">
                  <rect x="78.5" y="25.5" width="1021" height="575" stroke="#FFD700" stroke-width="3"/>
                </clipPath>
              </defs>
              <image 
                href={background_img}
                width="1101" 
                height="664" 
                x="2" 
                y="2"
                clipPath="url(#aboutMeClip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <rect x="78.5" y="25.5" width="1021" height="575" stroke="#FFD700" stroke-width="3"/>
              <rect x="161.57" y="642.5" width="577.796" height="21" fill="#FFD700" stroke="#1F2937"/>
              <rect x="520.933" y="606.5" width="577.796" height="21" fill="white" stroke="#1F2937"/>
              <path d="M1024.96 65.4932L1024.96 6.50683L1079.12 36L1024.96 65.4932Z" fill="white" stroke="#1F2937" strokeWidth="2"/>
              <path d="M123.825 98.7224L15.719 99.4956L1.00021 123.813L109.106 123.04L123.825 98.7224Z" fill="white" stroke="#1F2937"/>
            </svg>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex-1">
          <div>
            Sup
          </div>
        </div>
      </div>
    </section>
  )
}