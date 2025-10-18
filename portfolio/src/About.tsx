
import background_img from './assets/about_me_background.jpg';

type HomeProps = {
  setNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function About({ setNav }: HomeProps) {
  return(
    <section id="about_me" className="w-full min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-64px)]
flex items-center justify-center py-8">
      <div className="w-[85vw] h-[85vh] bg-[var(--light-blue)] border-1 border-[var(--yellow)]
      flex flex-col gap-4 3xl:gap-0">

        {/* Top Div */}
        <div className='w-full h-auto'>
          <div className="grid grid-cols-[1rem_auto_1rem] sm:grid-cols-[4rem_auto_4rem] justify-stretch">
            <div></div>
            <div>
              <h1 className="font-furore font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl px-4 w-full flex
              justify-center 3xl:justify-start">
                About me __
              </h1>
            </div>
            <div></div>
          </div>
        </div>

        {/* Bottom Div */}
        <div className='flex flex-col 3xl:flex-row w-full h-full overflow-y-auto'>

          {/* Left Div */}
          <div className="flex-1 3xl:flex-auto flex flex-col">
            
            <div className="flex h-full items-center justify-center">
              <svg className='w-3/4 3xl:w-8/10 h-auto' viewBox="0 0 1101 664" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="aboutMeClip">
                    <rect x="78.5" y="25.5" width="1021" height="575" stroke="#FFD700" strokeWidth="3"/>
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
                <rect x="78.5" y="25.5" width="1021" height="575" stroke="#FFD700" strokeWidth="3"/>
                <rect x="161.57" y="642.5" width="577.796" height="21" fill="#FFD700" stroke="#1F2937"/>
                <rect x="520.933" y="606.5" width="577.796" height="21" fill="white" stroke="#1F2937"/>
                <path d="M1024.96 65.4932L1024.96 6.50683L1079.12 36L1024.96 65.4932Z" fill="white" stroke="#1F2937" strokeWidth="2"/>
                <path d="M123.825 98.7224L15.719 99.4956L1.00021 123.813L109.106 123.04L123.825 98.7224Z" fill="white" stroke="#1F2937"/>
              </svg>
            </div>
          </div>

          {/* Right Div */}
          <div className="flex-1 h-auto flex justify-center items-center">
            <div className='bg-[var(--dark-blue)] h-auto w-9/10 p-4 max-h-[60vh] overflow-y-auto'>
              <p className='font-ubuntu text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl'>
                Hi, I'm <span className='font-bold text-[var(--yellow)]'>Andy Chen</span>, a Bachelor of Computing graduate 
                from the <span className='font-bold text-[var(--yellow)]'>University of Sydney</span>, majoring in Computer Science.
                <br/><br/>
                I currently work as a <span className='font-bold text-[var(--yellow)]'>Junior Solution Engineer</span>, 
                where I help manage customer IT infrastructure, configure endpoint 
                devices, and provide technical support.
                <br/><br/>
                I've always loved solving puzzles, tackling challenges, and building things, whether that's putting together 
                LEGO sets and jigsaw puzzles, developing software, or assembling PCs and workspace setup, which you can see 
                in the image above.
                <br/><br/>
                What draws me to development is the similarity to playing a game. You have the freedom to choose your own 
                approach, try different solutions, and it's always rewarding to see a project come together, like beating 
                a tough boss or reaching the end credits.
                <br/><br/>
                Outside of work, I enjoy <span className='font-bold text-[var(--yellow)]'>music, anime, gaming, 
                reading, and working out</span>. I've always been fascinated by 
                technology, which inspired me to design my portfolio with a 
                <span className='font-bold text-[var(--yellow)]'> futuristic, Cyberpunk inspired UI</span>. (easily one of my top 
                five favourite games + anime)
                <br/><br/>
                You can check out some of my projects below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}