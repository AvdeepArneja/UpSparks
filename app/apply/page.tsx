'use client';

import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const pitchMethods = [
  {
    title: 'Reaching out to our Founder Angel Venture Partners',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    description: 'Connect with and convince any of the Founder Angels from our Network to invest in your startup. Even as less as $ 5,000. We will then most likely invest with them.',
  },
  {
    title: 'Reaching out to our portfolio founders',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'We love our portfolio founders, and if you happen know any of these 100+ teams, you can ping them and ask them to introduce you to us.',
  },
  {
    title: 'Applying via our Application Form',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: 'We typically see 500+ deals every month and this form allows us to ensure that we give each and every founder a fair shot. Each and every form is meticulously checked.',
  },
];

const faqs = [
  {
    question: 'What is Upsparks Capital?',
    answer: 'Upsparks Capital is a community of, and for founders, who are going All In. We are a new type of VC fund that invests in Indian startups through a community of founders.',
  },
  {
    question: 'What type of rounds do we participate in?',
    answer: 'We invest USD 250K to 1M and lead pre-seed/seed rounds in Indian startups. We are usually the first ones to commit and wire so you can continue building!',
  },
  {
    question: 'Apart from the $, what do I get by raising from Upsparks?',
    answer: 'Beyond funding, you get access to our 100+ founder community, VC intros & connections, help crafting your narrative, and we are always available as your 2 AM friends - just a WhatsApp ping away!',
  },
];

export default function ApplyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showApplicationModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showApplicationModal]);

  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdtxcYyqENPd-wtZng11t3rcjLgtyz_aSkFFXDpvt1KNzIF4Q/viewform?usp=publish-editor', '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* ALL IN Banner */}
      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary-600 px-8 py-3 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">UPSPARKS</h1>
          </motion.div>
        </div>
      </section>

      {/* Three Ways to Pitch us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
              Three Ways to Pitch us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pitchMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-6">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <motion.button
                  onClick={() => {
                    if (index === 2) {
                      setShowApplicationModal(true);
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  READ MORE
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8">FAQS</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <motion.svg
                      className="w-6 h-6 text-primary-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowApplicationModal(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-8">
                    Applying via our Application Form
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      We typically see 500+ deals every month and this format allows us to ensure that we give each and every founder a fair shot.
                    </p>
                    
                    <p>
                      We realized that founders love this too because the form captures all the relevant details that we need to educate ourselves on the team, problem, and the market. So when we progress to set up the call with you, we come prepared to skip the basics and have a deeper, Level 2 conversation.
                    </p>
                    
                    <p>
                      This also means that if you are not the right fit for us (i.e. either we don&apos;t like the market or this is not the right stage for us etc) then we don&apos;t waste your time with a pointless call and we know as a founder, your own time is the most valuable resource you have.
                    </p>
                    
                    <p>
                      So we meticulously look at every form that is filled and we assure you we will respond back to you within three days (Really!). Usually, after the form is submitted, we set up a call, and post the call we give you a yes or no within 10 days from the day you submit the form.
                    </p>
                  </div>

                  {/* GO TO APPLICATION FORM Button */}
                  <motion.button
                    onClick={openGoogleForm}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    GO TO APPLICATION FORM
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
