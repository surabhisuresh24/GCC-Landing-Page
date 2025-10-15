// src/components/FAQ.tsx
import React from "react";
import { FormType } from "../types";

type FAQItem = { q: string; a: string };

interface FAQProps {
  onOpenModal?: (type: FormType) => void; // <-- accept prop (optional)
}

const items: FAQItem[] = [
  { q: "What is CMA USA?", a: "The Certified Management Accountant (CMA) is a worldwide certification provided by IMA that any aspirant can earn in 9-12 months." },
  { q: "What are the requirements for the CMA US Certification?", a: "Requirements include: A bachelor's degree from a recognized university, and two years of work experience applying management accounting and financial management principles." },
  { q: "How is CMA different from other accounting certifications?", a: "CMA USA focuses more on management accounting and financial strategy development than the other certifications. It emphasizes strategic business management and decision-making skills." },
  { q: "What are the passing criteria for CMA papers?", a: "You must score at least 360 out of 500 to pass the CMA exam. You must also get at least 50% of the MCQs right to access the Essay-based Scenario questions." },
  { q: "Is CMA USA a two-part exam?", a: "Yes, there are only two exams in the CMA USA curriculum. Part 1 covers Financial Planning, Performance, and Analytics. Part 2 covers Strategic Financial Management." },
  { q: "When are the exam windows for CMA USA?", a: "There are three exam windows yearly: January-February, May-June, and September-October. You can take the exams at any Prometric testing center worldwide." },
  { q: "How long does it take for a student to pass the exam?", a: "A student willing to work hard can complete the CMA USA course within 9-12 months, depending on their study schedule and commitment level." },
  { q: "What happens if I fail the CMA USA exams?", a: "You can reattempt exams, but you must complete the course within three years of registering with IMA. Each part can be attempted up to three times within a 12-month period." },
  { q: "Can I Pursue CMA USA along with a full-time job?", a: "Yes, you definitely can because CMA USA is a flexible course. Our program is specifically designed for working professionals with weekend and evening classes available." },
  { q: "What are the benefits of earning the CMA certification?", a: "Benefits include higher salary packages (average $80,000-$120,000 globally), global recognition in 150+ countries, career opportunities in Top MNCs and Fortune 500 companies, and advancement to C-suite positions." },
  { q: "How many questions are there in the CMA USA Exam?", a: "Each part contains 100 multiple-choice questions and two scenario-based essay questions. The exam duration is 4 hours per part." },
  { q: "What do the essay questions typically ask for?", a: "Essay questions require you to analyze a scenario or case study, apply knowledge of relevant concepts, make recommendations, and support your answers with evidence from the case." },
  { q: "Can I take the CMA exam Part 1 and Part 2 in any order?", a: "Yes, you can choose the order in which you take the exam parts. However, many candidates prefer taking Part 1 first as it covers foundational concepts." },
  { q: "What is the CMA USA salary globally?", a: "According to IMA salary surveys, CMAs earn an average of $100,000 globally. In the United States, the median salary is around $120,000, while senior-level CMAs can earn $150,000 or more." },
  { q: "Is CMA recognized globally?", a: "Yes, CMA is recognized in over 150 countries worldwide. It is highly valued by multinational corporations, Big 4 accounting firms, and Fortune 500 companies globally." },
  { q: "What career opportunities does CMA provide?", a: "CMA opens doors to roles such as Financial Analyst, Cost Accountant, Financial Controller, CFO, Management Accountant, Business Analyst, and other strategic finance positions in global companies." },

];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Card({ item, defaultOpen = false }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

const FAQ: React.FC<FAQProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about the CMA certification</p>
        </div>

        <div className="space-y-4 mb-12">
          <Card item={items[0]} defaultOpen />
          {items.slice(1).map((it, i) => <Card key={i} item={it} />)}
        </div>

        {/* CTA Panel (kept as you styled it); hook buttons to modal if provided */}
        <div
          className="rounded-2xl p-8 text-center text-white shadow-md"
          style={{ backgroundImage: "linear-gradient(180deg, #56B3E8 0%, #2F8FD4 100%)" }}>
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our career counselors are here to help you make the right decision for your future. Get personalized guidance based on your background and career goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenModal?.("counselling")}
              className="px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: "#FFFFFF", color: "#0B4F82" }}>
              Schedule Free Consultation
            </button>
            <button
              onClick={() => onOpenModal?.("brochure")}
              className="px-8 py-3 rounded-lg font-bold text-white shadow-lg hover:scale-105 transition-transform border-2 border-white/20"
              style={{ backgroundImage: "linear-gradient(90deg, #0B4F82 0%, #0A3E67 100%)" }}>
              Download Detailed Brochure
            </button>
          </div>

          <div className="mt-6 text-white/90 text-sm space-y-2">
            <div className="flex justify-center items-center gap-2">
              <img src="/images/GCC10.webp" className="w-5 h-5 object-contain" alt="" loading="lazy" />
              <span>Get instant answers to your questions</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="/images/GCC9.webp" className="w-5 h-5 object-contain" alt="" loading="lazy" />
              <span>Speak with our career experts</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <img src="/images/GCC8.webp" className="w-5 h-5 object-contain" alt="" loading="lazy" />
              <span>info@lakshyacommerce.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <img src="/images/GCC17.webp" className="w-5 h-5 object-contain" alt="" loading="lazy" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
