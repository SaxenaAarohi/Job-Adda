"use client";

export default function Hero() {
  return (
    <section className="relative bg-blue-800 text-white py-20 px-6 overflow-hidden rounded-b-[3rem] shadow-lg">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64  rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        {/* <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div> */}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-white animate-text">
          Discover Your Dream Career
        </h1>

        <p className="text-lg md:text-xl mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Connect with world-class companies and explore endless opportunities.  
          The next step in your journey starts today.
        </p>
      </div>
    </section>
  );
}
