
import pfp from './assets/pic.jpg';

export default function Home() {
  return(
    <section className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-1/2 flex flex-1 items-center justify-center">
        <h1 className='font-furore font-bold text-5xl'>
          HELLO.
        </h1>
      </div>

      <div className="w-1/2 flex flex-1 items-center justify-center">
        {/* PFP */}
        <svg className='w-3xl auto' viewBox="0 0 591 504" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </section>
  );
}