import React, { useEffect, useRef, useState } from "react";

const Testimonials: React.FC = () => {
  const statBlue = "#48A3E2";

  const videos = [
    { id: "fr8olRU60Ak", title: "Success Story #1" },
    { id: "MZ3D9qhZzbk", title: "Success Story #2" },
    { id: "u-iDeQrfrjo", title: "Success Story #3" },
    { id: "wy12xE732eY", title: "Success Story #4" },
  ];

  // ===== Carousel Setup =====
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [step, setStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  const measureStep = () => {
    const el = trackRef.current;
    const item = itemRef.current;
    if (!el || !item) return;
    const itemRect = item.getBoundingClientRect();
    const second = item.nextElementSibling as HTMLElement | null;
    let gap = 16;
    if (second) {
      const secondRect = second.getBoundingClientRect();
      gap = Math.max(0, secondRect.left - itemRect.right);
    }
    setStep(Math.round(itemRect.width + gap));
  };

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const epsilon = 2;
    setAtStart(scrollLeft <= epsilon);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - epsilon);
  };

  useEffect(() => {
    measureStep();
    updateEdges();

    const onScroll = () => updateEdges();
    const onResize = () => {
      measureStep();
      updateEdges();
    };

    const el = trackRef.current;
    el?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByCard = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = (dir === "left" ? -1 : 1) * (step || Math.round(el.clientWidth * 0.9));
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.scrollBy({ left: delta, behavior: prefersReduced ? "auto" : "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const autoScroll = setInterval(() => {
      if (isPaused) return;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard("right");
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [step, atEnd, isPaused]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scrollByCard("left");
    if (e.key === "ArrowRight") scrollByCard("right");
  };

  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(180deg, #EEF5FF 0%, #EAF2FF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of CMA USA professionals trained and successfully placed across top firms
          </p>
        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                1,00,000+
              </div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                $100K
              </div>
              <div className="text-gray-600">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                Global
              </div>
              <div className="text-gray-600">CMA Training Leader</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-2" style={{ color: statBlue }}>
                500+
              </div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>

        {/* Watch Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Watch Success Stories
          </h3>

          {/* MOBILE carousel */}
          <div
            className="relative md:hidden"
            role="region"
            aria-label="Success story videos carousel"
            onKeyDown={onKey}
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="
                no-scrollbar flex gap-4 overflow-x-auto pb-4
                snap-x snap-mandatory scroll-smooth
              "
            >
              {videos.map((v, i) => (
                <div
                  key={v.id}
                  ref={i === 0 ? itemRef : undefined}
                  className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-md flex-none w-[85vw] snap-center"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous video"
              onClick={() => scrollByCard("left")}
              disabled={atStart}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next video"
              onClick={() => scrollByCard("right")}
              disabled={atEnd}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 to-transparent rounded-l-xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 to-transparent rounded-r-xl" />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-md"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide horizontal scrollbar for the carousel */}
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE & Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
