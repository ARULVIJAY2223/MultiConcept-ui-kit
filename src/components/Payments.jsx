import cardImg from "../assets/card.png";
import transactionImg from "../assets/transactions.png";
import paymentsUI from "../assets/payments-ui.png";

export default function Payments() {
  return (
    <section id="services" className="bg-[#f5f6f8] py-12 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-20 md:space-y-32">

        {/* -------- FIRST ROW -------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* LEFT - Image Version */}
          <div className="relative flex justify-center items-center order-2 md:order-1">

            {/* Soft Glow Background */}
            <div className="absolute w-[300px] md:w-[520px] h-[220px] md:h-[380px] bg-black/5 rounded-[40px] md:rounded-[60px] blur-2xl md:blur-3xl"></div>

            <img
              src={paymentsUI}
              alt="payments ui"
              className="relative w-full max-w-[480px] object-contain"
            />

          </div>

          {/* RIGHT - Text */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Virtual payment & <br className="hidden md:block" />
              credit cards with <br className="hidden md:block" />
              built-in rules
            </h2>

            <p className="text-gray-500 mt-6 max-w-md mx-auto md:mx-0">
              Activate your free Bankrate account to unlock our most premium
              tools and content. Activate your free Bankrate
            </p>

            <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-medium transition shadow-md w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>

        {/* -------- SECOND ROW -------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Easily control your <br className="hidden md:block" />
              billing & invoice
            </h2>

            <p className="text-gray-500 mt-6 max-w-md mx-auto md:mx-0">
              Activate your free Bankrate account to unlock our most premium
              tools and content.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-left max-w-xs mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                ✔ Create an invoice
              </div>
              <div className="flex items-center gap-2">
                ✔ Get paid fast globally
              </div>
              <div className="flex items-center gap-2">
                ✔ Payment request
              </div>
              <div className="flex items-center gap-2">
                ✔ Simplified Transaction
              </div>
            </div>
          </div>

          {/* RIGHT - Card + Transactions */}
          <div className="relative flex justify-center h-[300px] md:h-auto mt-10 md:mt-0">

            <img
              src={cardImg}
              alt="card"
              className="w-[280px] md:w-[350px] rounded-2xl self-start md:self-auto"
            />

            <img
              src={transactionImg}
              alt="transactions"
              className="absolute top-20 md:-top-10 right-4 md:right-0 w-[200px] md:w-[260px] rounded-2xl shadow-xl md:shadow-none"
            />
          </div>
        </div>

      </div>
    </section>

  );
}