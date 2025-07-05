import { useState, useEffect } from "react";

export default function Landing() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'TH';
    switch (day % 10) {
      case 1: return 'ST';
      case 2: return 'ND';
      case 3: return 'RD';
      default: return 'TH';
    }
  };

  const getDate = (date) => {
    const day = date.getDate();
    return day + getOrdinalSuffix(day);
  };

  const getMonth = (date) => {
    return date.toLocaleString('default', { month: 'long' }).toUpperCase();
  };

  const getYear = (date) => {
    return date.getFullYear();
  };

  return (
    <div className="min-h-screen bg-gray-800 p-2 md:p-4">
      <nav className="flex justify-between items-start">
        <button className="group w-8 h-auto p-0 border-none bg-transparents cursor-pointer">
          <svg
            viewBox="0 0 59 23"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M0 0V5H52.7194L59 0H0Z" fill="white" className="group-hover:fill-yellow-200 transition" />
            <path d="M0 18V23H41.9968L47 18H0Z" fill="white" className="group-hover:fill-yellow-200 transition" />
            <path d="M0 9V14H47.3581L53 9H0Z" fill="#ffff33" className="group-hover:fill-yellow-200 transition" />
          </svg>
        </button>

        <div className="flex gap-2">
          <div className="text-yellow-200 font-mono text-sm text-right">
            <h1>{getDate(currentDate)}</h1>
            <h1>{getMonth(currentDate)}</h1>
            <h1>{getYear(currentDate)}</h1>
          </div>
          <div className="bg-white w-0.5"/>
        </div>
      </nav>
    </div>
  );
}