import phone from "../assets/phone.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import spark from "../assets/spark.png";

export default function AppCTA() {
  return (
    <section className="bg-[#f5f6f8] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">

        {/* Purple Box */}
        <div className="relative bg-[#858dfd] rounded-[40px] px-10 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center overflow-visible shadow-2xl">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl text-center md:text-left z-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Are you ready to use this Application?
            </h2>

            <p className="mt-8 text-white/90 text-lg md:text-xl font-medium">
              Activate your free Bankrate account to unlock our most
              premium tools and content.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center md:items-start">
              <img
                src={appstore}
                alt="App Store"
                className="h-14 lg:h-16 cursor-pointer hover:scale-105 transition"
              />
              <img
                src={playstore}
                alt="Google Play"
                className="h-14 lg:h-16 cursor-pointer hover:scale-105 transition"
              />
            </div>
          </div>

          {/* SPARK STARS */}
          <img
            src={spark}
            alt="spark"
            className="hidden xl:block absolute top-12 right-[42%] w-10 opacity-100"
          />

          <img
            src={spark}
            alt="spark"
            className="hidden xl:block absolute top-1/2 -right-10 -translate-y-1/2 w-48 opacity-100 brightness-110"
          />

          {/* PHONE IMAGE (OVERLAPPING) */}
          <div className="mt-16 md:mt-0 relative md:absolute -top-12 md:-top-24 lg:-top-32 -bottom-12 md:-bottom-24 lg:-bottom-32 right-0 md:-right-4 lg:-right-8 flex justify-center z-20">
            <img
              src={phone}
              alt="phone"
              className="w-[300px] md:w-[400px] lg:w-[480px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] object-contain"
            />
          </div>

        </div>
      </div>
    </section>



  );
}