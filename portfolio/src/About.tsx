
type HomeProps = {
  setNav: React.Dispatch<React.SetStateAction<string>>;
};

export default function About({ setNav }: HomeProps) {
  return(
    <section id="about_me" className="w-full min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-64px)]">
      <div className="w-80 min-h-3/4 bg-[-var(--light-blue)] outline-[-var(--yellow)]">
      yo
      </div>
    </section>
  )
}