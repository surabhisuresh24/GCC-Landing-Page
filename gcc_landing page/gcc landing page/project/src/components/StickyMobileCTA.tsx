import React from 'react';
import { FormType } from '../types';

interface StickyMobileCTAProps {
  onOpenModal: (type: FormType) => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenModal }) => {
  // Button height ~ 48–56px; we’ll reserve that much space above, so content is never hidden.
  const spacerHeight = '56px';

  return (
    <>
      {/* Spacer so the fixed bar doesn't overlap content */}
      <div
        className="lg:hidden"
        aria-hidden
        style={{
          height: `calc(${spacerHeight} + env(safe-area-inset-bottom, 0px))`,
        }}
      />

      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Outer strip */}
        <div className="bg-white border-t border-gray-200 shadow-lg">
          {/* Padded container so buttons have breathing room */}
          <div className="px-3 py-2">
            <div className="flex gap-2">
              <button
                onClick={() => onOpenModal('counselling')}
                className="flex-1 rounded-lg shadow-md
                           bg-gradient-to-r from-brand-secondary to-brand-yellow
                           text-brand-primary
                           px-3 py-2.5 text-sm font-semibold
                           hover:from-brand-yellow hover:to-brand-secondary-dark
                           transition-all duration-200 active:scale-[.99]"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <span role="img" aria-label="phone">📞</span>
                  <span className="leading-[1.15] text-center">Schedule Free Counselling</span>
                </span>
              </button>

              <button
                onClick={() => onOpenModal('brochure')}
                className="flex-1 rounded-lg shadow-md
                           bg-brand-primary text-white
                           px-3 py-2.5 text-sm font-semibold
                           hover:bg-brand-primary-light
                           transition-all duration-200 active:scale-[.99]"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <span role="img" aria-label="download">📥</span>
                  <span className="leading-[1.15] text-center">Download Brochure</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyMobileCTA;