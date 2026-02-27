import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.png";
import netflix from "../assets/netflix.png";
import slack from "../assets/slack.png";
import adobe from "../assets/adobe.png";
import alibaba from "../assets/alibaba.png";

export default function Ecosystem() {
  return (
    <section className="bg-[#f5f6f8] py-12 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20">

        {/* LEFT ORBIT DESIGN */}
        <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center transform scale-[0.65] sm:scale-90 md:scale-100">

          {/* Outer Circle */}
          <div className="absolute w-[520px] h-[520px] border border-dashed border-gray-300 rounded-full"></div>

          {/* Inner Circle */}
          <div className="absolute w-[350px] h-[350px] border border-dashed border-gray-300 rounded-full"></div>

          {/* Center Logo */}
          <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <img src={airbnb} alt="airbnb" className="w-14" />
          </div>

          {/* Top */}
          <div className="absolute top-0 w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
            <img src={adobe} alt="" className="w-10" />
          </div>

          {/* Left */}
          <div className="absolute left-0 w-28 h-28 bg-white rounded-full shadow-md flex items-center justify-center">
            <img src={amazon} alt="" className="w-16" />
          </div>

          {/* Right */}
          <div className="absolute right-0 w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
            <img src={slack} alt="" className="w-12" />
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
            <img src={netflix} alt="" className="w-12" />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white rounded-full shadow-md flex items-center justify-center">
            <img src={alibaba} alt="" className="w-16" />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left mt-[-60px] md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            The most sophisticated <br className="hidden md:block" />
            banking ever
          </h2>

          <p className="text-gray-500 mt-6 max-w-md mx-auto md:mx-0">
            E-wallet makes it easy for you to make payments through your
            mobile phone easily without having to leave the house. We use
            the most advanced systems so security is guaranteed.
          </p>

          <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-medium shadow-md transition w-full sm:w-auto">
            Get Started
          </button>
        </div>

      </div>
    </section>

  );
}