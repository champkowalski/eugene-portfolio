import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">Eugene Amoo-Sargon</h1>
            <p className="text-md text-gray-600 mb-6">
              Analytical and detail-oriented Information Systems expert / Data Analyst with experience in human
              resources, bioinformatics & marketing. I specialize in creating interactive dashboards, building data
              models, information system implementations and management. I am skilled in gathering and analyzing data to
              provide actionable insights using Power BI & MS Excel to streamline business operations, and support
              decision-making.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://docs.google.com/document/d/10XxxO3udd5kZKAkE8AbSklrUdjUTlxe5/edit?usp=drive_link&ouid=102003769143087472434&rtpof=true&sd=true"
                className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src="/eugene-1.jpeg"
              alt="HR Analytics Dashboard"
              className="rounded-lg object-cover ml-8 h-64 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
