'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Vinay Jain',
    role: 'Partner',
    image: 'https://static.wixstatic.com/media/16d720_f904753ac47d4c518519163a77f6fbed~mv2.jpg/v1/crop/x_52,y_0,w_396,h_476/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/vinay.jpg',
  },
  {
    name: 'Mohamad Faraz',
    role: 'Partner',
    image: 'https://static.wixstatic.com/media/16d720_700f62a3f0ee4cb1bc09e3f9eeb84f49~mv2.png/v1/crop/x_52,y_0,w_396,h_476/fill/w_269,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faraz-profile.png',
  },
  {
    name: 'Shivam Prasad',
    role: 'Partner',
    image: 'https://static.wixstatic.com/media/16d720_c76f2b88b1654ff19cce98844b32168a~mv2.png/v1/crop/x_40,y_0,w_417,h_501/fill/w_269,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shivam-profile.png',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-200 rounded-lg overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="224" height="224"><rect width="224" height="224" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%239ca3af" font-family="system-ui">${member.name.split(' ').map(n => n[0]).join('')}</text></svg>`)}`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
                      Photo
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-base text-gray-600">{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
