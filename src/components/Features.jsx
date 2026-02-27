export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#f5f6f8] py-12 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Some of our Premium Features
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Activate your free Bankrate account to unlock our most
          premium tools and content.
        </p>

        {/* Cards */}
        <div className="relative mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {/* LEFT CARD */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm text-center md:text-left transition hover:shadow-md">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-indigo-500 text-2xl">💳</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              Safe Banking
            </h3>

            <p className="text-gray-500 mt-4">
              Activate your free Bankrates account to unlock your most premium.
            </p>

            <button className="mt-6 text-indigo-500 font-medium flex items-center gap-2 mx-auto md:mx-0">
              Learn More →
            </button>
          </div>

          {/* CENTER CARD (Highlighted) */}
          <div className="relative bg-white p-8 md:p-10 rounded-3xl text-center md:text-left shadow-xl md:scale-105 z-10">

            {/* Glow Background */}
            <div className="absolute -inset-6 bg-red-500/10 blur-3xl rounded-3xl -z-10"></div>

            <div className="w-14 h-14  rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-orange-400 text-2xl">⭐</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              Easy to Use
            </h3>

            <p className="text-gray-500 mt-4">
              Activate your free Bankrates account to unlock your most premium.
            </p>

            <button className="mt-6 text-indigo-500 font-medium flex items-center gap-2 mx-auto md:mx-0">
              Learn More →
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm text-center md:text-left transition hover:shadow-md">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <span className="text-orange-400 text-2xl">🔒</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              Secured Money
            </h3>

            <p className="text-gray-500 mt-4">
              Activate your free Bankrates account to unlock your most premium.
            </p>

            <button className="mt-6 text-indigo-500 font-medium flex items-center gap-2 mx-auto md:mx-0">
              Learn More →
            </button>
          </div>

        </div>
      </div>
    </section>

  );
}