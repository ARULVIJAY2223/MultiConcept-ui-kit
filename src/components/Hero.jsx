import heroImg from "../assets/hero.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-20 bg-[#f5f6f8]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-[60px] leading-tight md:leading-[75px] font-bold text-gray-800">
            Make Your Online <br />
            Bank More <br className="hidden md:block" />

            <span className="relative inline-block text-orange-400">
              Faster

              {/* ORBIT SVG */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:-bottom-6 w-[180px] md:w-[260px]"
                viewBox="0 0 300 120"
                fill="none"
              >
                <ellipse
                  cx="150"
                  cy="60"
                  rx="120"
                  ry="40"
                  stroke="#f4a261"
                  strokeWidth="3"
                />
                <ellipse
                  cx="150"
                  cy="60"
                  rx="100"
                  ry="30"
                  stroke="#f4a261"
                  strokeWidth="2"
                  transform="rotate(-15 150 60)"
                />
              </svg>
            </span>{" "}
            & Smooth
          </h1>

          {/* Bullet Points */}
          <ul className="mt-14 md:mt-8 space-y-5 text-gray-600 text-base md:text-lg">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="text-green-600 mt-1 font-bold">✔</span>
              Automate your corporate finance management
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="text-green-600 mt-1 font-bold">✔</span>
              Save time on expense reports
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="text-green-600 mt-1 font-bold">✔</span>
              Truly optimize your accounting process
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md transition">
              Get Started
            </button>

            <button className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm">
                ▶
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center mt-12 md:mt-0">

          {/* Purple Background Box */}
          <div className="absolute bottom-0 w-[280px] md:w-[420px] h-[350px] md:h-[520px] bg-indigo-500 rounded-[30px] md:rounded-[40px]"></div>

          <img
            src={heroImg}
            alt="hero"
            className="relative w-[280px] md:w-[420px]"
          />
        </div>

      </div>
    </section>

  );
}