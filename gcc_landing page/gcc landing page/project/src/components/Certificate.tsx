import React from "react";

const Certificate: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Copy + bullets */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Globally Recognized CMA USA Certificate
            </h2>

            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              Earn the prestigious CMA USA certification from the Institute of
              Management Accountants (IMA), recognized by employers worldwide
              and valued by Fortune 500 companies.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  h: "Global Recognition",
                  p: "Accepted in 150+ countries worldwide",
                },
                {
                  h: "Industry Standard",
                  p: "Preferred by Big 4 and Fortune 500 companies",
                },
                {
                  h: "Career Advancement",
                  p: "Opens doors to senior management roles",
                },
                {
                  h: "Salary Premium",
                  p: "CMAs earn significantly higher than non-certified peers globally",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.h}</h4>
                    <p className="text-gray-600">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features panel (soft green) */}
            <div
              className="rounded-xl p-5 md:p-6"
              style={{ backgroundColor: "#DCEFE1" }} // soft green like the reference
            >
              <h4 className="font-semibold mb-2 text-gray-900">
                Certificate Features:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Official IMA USA seal and signature</li>
                <li>• Unique certificate number for verification</li>
                <li>• Digital badge for LinkedIn and resume</li>
                <li>• Lifetime validity with annual CPE requirements</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Certificate mock + stats */}
          <div className="relative place-self-center w-full max-w-xl lg:max-w-2xl">
            {/* Raised gradient card */}
            <div
              className="rounded-2xl p-4 md:p-6 shadow-xl border border-white/40"
              style={{
                background:
                  "linear-gradient(180deg, rgba(232,244,253,0.75) 0%, rgba(245,250,255,0.75) 100%)",
              }}
            >
              <div className="relative rounded-xl p-3 md:p-4 bg-white shadow-md">
                <img
                  src="/images/cma usa certificate.jpg"
                  alt="CMA USA Certificate"
                  className="w-full rounded-lg"
                />

                {/* IMA badge pill */}
                <div
                  className="absolute -top-3 right-3 md:-top-4 md:right-4 px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold shadow"
                  style={{ backgroundColor: "#0B4F82" }}
                >
                  IMA Certified
                </div>
              </div>
            </div>

            {/* Soft platform shadow */}
            <div
              className="mx-6 h-6 rounded-xl blur-md opacity-60"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02))",
              }}
            />

            {/* Stat tiles */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-[#48A3E2]">150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-extrabold text-[#48A3E2]">
                  IMA USA
                </div>
                <div className="text-sm text-gray-600">Authorized</div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
