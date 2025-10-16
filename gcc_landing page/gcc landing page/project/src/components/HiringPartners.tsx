import React, { useEffect, useRef } from "react";

const HiringPartners: React.FC = () => {
  // Partner list (ensure these .webp files exist in /public/images)
  const partnerFiles = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a5b3929 (cmmit msg)
    "Deloitte",
    "EY",
    "KPMG",
    "PwC",
    "Accenture",
    "IBM",
    "Capgemini",
    "JP Morgan",
    "Goldman Sachs",
    "Morgan Stanley",
    "Citi",
    "Bank of America",
    "Infosys",
    "TCS",
    "Wipro",
    "Amazon",
    "HCL",
    "Tech Mahindra",
    "Cognizant",
    "HDFC Bank",
    "ICICI Bank",
    "IDBI Bank",
    "Federal Bank",
    "Hero",
    "Tata",
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f597c60 (new commit)
    "DELOITTE",
    "EY",
    "KPMG",
    "PWC",
    "HERO",
    "IBM",
    "IDBI BANK",
    "INFOSYS",
    "TATA",
    "WIPRO",
    "FEDERAL BANK",
    "CITI BANK",
    "STD CHARTERED",
    "GRANT THROMPTON",
    "BDO",
    "MERCEDES BENZ",
    "RELIANCE",
    "AIRTEL",
    "MAHINDRA",
    "HDFC",
    "BARCLAYS",
    "ICICI BANK",
    "AXIS BANK",
    "JINDAL STEEL AND POWDER",
    "BMW",
    "AUDI",
    "HSBC",
    "NIVEA",
<<<<<<< HEAD
>>>>>>> 5dae3c3 (commit message)
>>>>>>> a5b3929 (cmmit msg)
=======
>>>>>>> f597c60 (new commit)
  ];

  const partners = partnerFiles.map((name) => ({
    name,
    logo: `/images/${encodeURIComponent(name)}.webp`,
  }));

  const statBlue = "#48A3E2";

  // Auto-scroll effect for mobile view
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per frame
    const scrollDelay = 25; // ms delay between scrolls

    const interval = setInterval(() => {
      if (!container) return;
      scrollAmount += scrollStep;
      container.scrollLeft = scrollAmount;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollAmount = 0; // reset scroll to loop
      }
    }, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Hiring Partners
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Our students are placed in top companies across the globe
          </p>
        </div>

        {/* === Partner Logos (Mobile Horizontal Scroll / Desktop Grid) === */}
        {/* Mobile (horizontal scroll) */}
        <div
          ref={scrollRef}
          className="flex sm:hidden overflow-x-auto no-scrollbar space-x-4 pb-4"
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="min-w-[150px] bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center h-24 flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Tablet & Desktop (grid) */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center h-24 md:h-28 lg:h-32"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-20 max-w-[85%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* === Stats Section === */}
        <div className="mt-16 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: statBlue }}
              >
                500+
              </div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
            <div>
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: statBlue }}
              >
                Global
              </div>
              <div className="text-gray-600">Career Opportunities</div>
            </div>
            <div>
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: statBlue }}
              >
               $150K+
              </div>
              <div className="text-gray-600">Senior Level Salary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for smooth mobile experience */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HiringPartners;
