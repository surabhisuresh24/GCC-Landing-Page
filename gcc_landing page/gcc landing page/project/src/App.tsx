import { useState } from 'react';
import Hero from './components/Hero';
import CourseHighlights from './components/CourseHighlights';
import SyllabusOverview from './components/SyllabusOverview';
import HiringPartners from './components/HiringPartners';
import Certificate from './components/Certificate';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StickyMobileCTA from './components/StickyMobileCTA';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import { FormType } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('counselling');

  const openModal = (type: FormType) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Ticker (blue) */}
      <div className="text-white py-2 overflow-hidden bg-gradient-to-r from-[#48A3E2] to-[#2F8FD4]">
        <div className="ticker whitespace-nowrap">
          <span className="text-sm font-semibold">
            🚨Apply Now! Application for next batch closes October 19, 2025 - Limited Seats Available!🎓
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://lakshyamailerimages.s3.ap-south-1.amazonaws.com/Lg.png"
                alt="Lakshya Commerce"
                className="h-12 sm:h-14 w-auto"   // enlarged logo
              />
            </div>
           <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=919061277777&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
            className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#20b957] transition-colors text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2">
              <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0a11.93 11.93 0 0 0-10.6 17.71L0 24l6.45-1.68A11.93 11.93 0 0 0 12 24h.01A11.94 11.94 0 0 0 24 12a11.85 11.85 0 0 0-3.48-8.52zM12 22a9.9 9.9 0 0 1-5.07-1.39l-.36-.21-3.83 1L3 17.49l-.24-.38A9.94 9.94 0 1 1 12 22zm5.37-7.61c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18c-.17.2-.35.22-.65.07a8.12 8.12 0 0 1-2.38-1.47 9.07 9.07 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5a.55.55 0 0 0-.02-.52c-.07-.15-.67-1.62-.91-2.22-.24-.6-.49-.52-.67-.53h-.58a1.12 1.12 0 0 0-.8.37 3.36 3.36 0 0 0-1.04 2.48 5.87 5.87 0 0 0 1.26 3.11 13.49 13.49 0 0 0 5.11 4.63 17.06 17.06 0 0 0 1.71.63 4.11 4.11 0 0 0 1.87.12 3.05 3.05 0 0 0 2.01-1.41 2.49 2.49 0 0 0 .17-1.41c-.07-.13-.27-.22-.57-.37z" />
            </svg>
            +91 9061277777
          </button>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero onOpenModal={openModal} />
        <CourseHighlights onOpenModal={openModal} />
        <SyllabusOverview onOpenModal={openModal} />
        <HiringPartners />
        <Certificate />
        <Testimonials />
        <FAQ onOpenModal={openModal} />
      </main>

      {/* Sticky Mobile CTAs */}
      <StickyMobileCTA onOpenModal={openModal} />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm formType={formType} onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default App;