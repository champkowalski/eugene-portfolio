import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-[85rem] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Eugene Amoo-Sargon
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Analytical and detail-oriented Information Systems expert / Data Analyst with experience in human
              resources, bioinformatics & marketing. I specialize in creating interactive dashboards, building data
              models, information system implementations and management. I am skilled in gathering and analyzing data to
              provide actionable insights using Power BI & MS Excel to streamline business operations, and support
              decision-making.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                href="#contact"
                className="bg-blue-600 text-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/eugene_resume.pdf"
                className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 text-sm rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="relative ms-4">
            <img className="w-full h-[500px] rounded-xl object-cover" src="/eugene-1.jpeg" alt="Hero Image" />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
