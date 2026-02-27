import card1 from "../assets/float1.png";
import card2 from "../assets/float2.png";
import card3 from "../assets/float3.png";
import card4 from "../assets/float4.png";
import round from "../assets/round.png"

export default function HandleMoney() {
  return (
    <section className="relative bg-[#f5f6f8] py-20 md:py-32 overflow-hidden">

      {/* Radial Background Effect */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-gray-200 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6">

        {/* Floating Images (Desktop only) */}
        <img
          src={card1}
          alt=""
          className="hidden lg:block absolute top-0 left-10 w-24 rotate-[-15deg] "
        />
        <img
          src={card2}
          alt=""
          className="hidden lg:block absolute top-10 right-16 w-24 rotate-[15deg] "
        />
        <img
          src={card3}
          alt=""
          className="hidden lg:block absolute bottom-0 left-20 w-24 rotate-[10deg] "
        />
        <img
          src={card4}
          alt=""
          className="hidden lg:block absolute bottom-0 right-20 w-24 rotate-[-10deg] "
        />

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          We’ll Handle the{" "}
          <span className="relative text-orange-400">
            Money
            <img
              src={round}
              alt="vector"
              className="absolute left-0 -bottom-2 md:-bottom-3 w-full"
            />
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-500 mt-6 max-w-xl mx-auto text-base md:text-lg">
          Activate your free Bankrate account to unlock our most premium
          tools and content.
        </p>

        {/* Button */}
        <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-base md:text-lg font-medium shadow-md transition w-full sm:w-auto">
          Get Started
        </button>
      </div>
    </section>

  );
}