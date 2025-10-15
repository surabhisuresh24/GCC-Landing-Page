import React from "react";
import type { FormType } from "../types";

type Props = {
  onOpenModal: (type: FormType) => void;
};

const Hero: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="relative brand-gradient text-white overflow-hidden __web-inspector-hide-shortcut__">
      {/* bg pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== Left: Text ===== */}
          <div className="text-center lg:text-left">
            {/* Pill badge with fade-in/out animation */}
            <div className="relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6 bg-[#4CB7D9] text-white shadow-sm fade-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Globally Recognized CMA USA Certification
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Career with{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                CMA USA Certification
              </span>
            </h1>

            {/* Feature bullets */}
            <ul className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed space-y-2">
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <span className="text-yellow-400 text-xl">✔</span>
                Global Career Opportunities with Top MNCs
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <span className="text-yellow-400 text-xl">✔</span>
                Live Classes by Industry Experts
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <span className="text-yellow-400 text-xl">✔</span>
                Average Salary: $80,000 - $120,000 per year
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105 bg-[#FFD43B] text-[#0B4F82] hover:brightness-105"
                onClick={() => onOpenModal("counselling")}
              >
                Schedule Free Counselling
              </button>
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105 bg-white text-[#0B4F82] border border-white/60 hover:bg-white/95"
                onClick={() => onOpenModal("brochure")}
              >
                Download Brochure
              </button>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-blue-200">
              <div className="flex items-center gap-1">
                <span className="text-yellow-300 text-lg">⭐</span>
                4.9/5 Student Rating
              </div>
              <div className="flex items-center gap-1">
                <span className="text-pink-300 text-lg">👥</span>
                100,000+ Students Trained
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-300 text-lg">🏆</span>
                90% Pass Rate
              </div>
            </div>
          </div>

          {/* ===== Right: Video Card with Overlays (as in 2nd image) ===== */}
          <div className="relative">
            <div className="relative rounded-2xl p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-[#1c6bb3]/70 to-[#2f77c7]/60 backdrop-blur-md">
              {/* Top-left floating badge */}
              <div className="absolute -top-5 -left-5 z-20">
                <div className="bg-[#0B4F82] text-white font-semibold rounded-2xl rounded-bl-none px-5 py-3 shadow-lg">
                  <div className="text-lg leading-none">IMA USA</div>
                  <div className="text-xs opacity-90 mt-1">Certified Program</div>
                </div>
              </div>

              {/* Video */}
              <div className="aspect-video bg-gray-900 rounded-xl mb-6 relative overflow-hidden ring-1 ring-white/10">
                <iframe
                  src="https://www.youtube.com/embed/lkAdabKpQXg"
                  title="CMA USA Course Preview"
                  className="w-full h-full rounded-xl"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom-right yellow card */}
              <div className="absolute -bottom-6 right-6 z-20">
                <div className="bg-[#FFD43B] text-[#0B4F82] rounded-2xl px-6 py-5 shadow-xl">
                  <div className="text-3xl font-extrabold leading-none">$100K</div>
                  <div className="text-sm font-semibold opacity-90 mt-1">Average Salary</div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>

      {/* (Optional) Bottom metric boxes retained from earlier steps — remove if not needed */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8 text-center">
            <div className="text-4xl font-extrabold text-yellow-300">150+</div>
            <div className="mt-2 text-white/90">Countries Recognize</div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8 text-center">
            <div className="text-4xl font-extrabold text-yellow-300">$150K+</div>
            <div className="mt-2 text-white/90">Senior Level Salary</div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8 text-center">
            <div className="text-4xl font-extrabold text-yellow-300">500+</div>
            <div className="mt-2 text-white/90">Hiring Partners</div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8 text-center">
            <div className="text-4xl font-extrabold text-yellow-300">9-12</div>
            <div className="mt-2 text-white/90">Months to Complete</div>
          </div>
        </div>
      </div>

      {/* Fade in & fade out animation for the top pill */}
      <style jsx>{`
        .fade-pulse {
          animation: fadeInOut 3s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(76, 183, 217, 0.4),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(76, 183, 217, 0.2);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 25px rgba(76, 183, 217, 0.9),
              inset 0 0 15px rgba(255, 255, 255, 0.3);
          }
          100% {
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(76, 183, 217, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;