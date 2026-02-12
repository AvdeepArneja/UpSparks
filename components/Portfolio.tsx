'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const partnerLogos = [
  { name: 'Anar', logo: 'https://static.wixstatic.com/media/16d720_932f9d72f46242e5a2ba479e635b8810~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://anar.biz/' },
  { name: 'Bambrew', logo: 'https://static.wixstatic.com/media/16d720_fdad50ee2eb7475a9a10d14fff5b7ba3~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.bambrew.in/' },
  { name: 'Bodhi', logo: 'https://static.wixstatic.com/media/16d720_6a0e8ce2c0d0474bad3c2cbaec48012f~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.bodhi.app/' },
  { name: 'CustomFit', logo: 'https://static.wixstatic.com/media/16d720_beb704a1b4f64e10ab2135041a0ae455~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.customfit.ai/' },
  { name: 'Fello', logo: 'https://static.wixstatic.com/media/16d720_41520c0d23e14690b851b77f2f286264~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://fello.in/' },
  { name: 'Galaxeye', logo: 'https://static.wixstatic.com/media/16d720_57fbd3fcde2344dd99d1e6f0fda9c959~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://galaxeye.space/' },
  { name: 'HuddleUp', logo: 'https://static.wixstatic.com/media/16d720_b71c618358d94124953a9db3933c2055~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://huddleup.ai/' },
  { name: 'Julep', logo: 'https://static.wixstatic.com/media/16d720_c0119c377209450a8464b5dbb7270979~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.julep.ai/' },
  { name: 'Kraze', logo: 'https://static.wixstatic.com/media/16d720_b29d3f6a98b94701b90cfdc95c1a7e4e~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.krazeapp.com/' },
  { name: 'Multipli', logo: 'https://static.wixstatic.com/media/16d720_0889d20c190d480584009bf97895e225~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://multipli.fi/' },
  { name: 'OneAssure', logo: 'https://static.wixstatic.com/media/16d720_b14dea1fbbf84497ada865abad65b1ed~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.oneassure.in/' },
  { name: 'Preimage', logo: 'https://static.wixstatic.com/media/16d720_9ec0565dd8de481a9e0d3683bc6c8ef9~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://preimage.ai/' },
  { name: 'Quso', logo: 'https://static.wixstatic.com/media/16d720_ee67308f14354fcf8de51f90254a048b~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://quso.ai/' },
  { name: 'Rippl', logo: 'https://static.wixstatic.com/media/16d720_6d743780c4be4ce6a762dd67357382b1~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://rippl.club/' },
  { name: 'Tap Invest', logo: 'https://static.wixstatic.com/media/16d720_59978d9eb635485ca8dbee61e7a5dc82~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://tapinvest.in/' },
  { name: 'Typo', logo: 'https://static.wixstatic.com/media/16d720_20d2d4117e264d4c8de4024b91f1f9e4~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://typoapp.io/' },
  { name: 'Wizr', logo: 'https://static.wixstatic.com/media/16d720_5f2bf28d0b7a49ed9542cd68151be304~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.wizr.ai/' },
  { name: 'Zypp', logo: 'https://static.wixstatic.com/media/16d720_e5138af25bb6496f86b8758bc04e8c07~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.zypp.app/' },
  { name: 'Arcab', logo: 'https://static.wixstatic.com/media/16d720_42004d9104d942aab06665921a1b611b~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://arcab.ae/' },
  { name: 'Beatoven', logo: 'https://static.wixstatic.com/media/16d720_01933dd952054856813276135b21689b~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.beatoven.ai/' },
  { name: 'Brysk', logo: 'https://static.wixstatic.com/media/16d720_73a03ff888144c7ca57f889c0ee1e427~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.brysk.com/' },
  { name: 'Decentro', logo: 'https://static.wixstatic.com/media/16d720_bde3667587be4c92866670c894a422f3~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://decentro.tech/' },
  { name: 'Flam', logo: 'https://static.wixstatic.com/media/16d720_83635f16f8034c8881677eb9f2b58e00~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://flamapp.com/' },
  { name: 'GlamPlus', logo: 'https://static.wixstatic.com/media/16d720_09d0eacff2d0486f98af602b23aea65c~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://glamplus.in/' },
  { name: 'Hypergro', logo: 'https://static.wixstatic.com/media/16d720_3728abbf69494c10bb1acccdb5ceffce~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://hypergro.ai/' },
  { name: 'Keploy', logo: 'https://static.wixstatic.com/media/16d720_2c686b824b5a423ab631365f268c72f2~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://keploy.io/' },
  { name: 'Kusho', logo: 'https://static.wixstatic.com/media/16d720_506bedf7cd0d403ab3550a7ae4d5f072~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://kusho.co/' },
  { name: 'Multiwoven', logo: 'https://static.wixstatic.com/media/16d720_1258a44d8c804c4b955631d3737096fc~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.multiwoven.com/' },
  { name: 'Oyela', logo: 'https://static.wixstatic.com/media/16d720_81e3e34d1e79445e9341d80b7db7e07e~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.oyela.in/' },
  { name: 'Procuzy', logo: 'https://static.wixstatic.com/media/16d720_83542e4910794f2390faf54a1cbfc295~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.procuzy.com/' },
  { name: 'Refrens', logo: 'https://static.wixstatic.com/media/16d720_c011cf9548fe4d4aa10a4d43fd7e1dcf~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.refrens.com/' },
  { name: 'SkilloVilla', logo: 'https://static.wixstatic.com/media/16d720_ab90b670950f43759cc3b1b8ec2469ce~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.skillovilla.com/' },
  { name: 'The Arc', logo: 'https://static.wixstatic.com/media/16d720_4f92e9d6fb01493ba0f6329ce220dc0c~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://thearcweb.com/' },
  { name: 'Aspire', logo: 'https://static.wixstatic.com/media/16d720_10eb77ac48f143a38b511f2536ab7d5f~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.letsaspire.in/' },
  { name: 'Bitespeed', logo: 'https://static.wixstatic.com/media/16d720_fbf4b0568b1a45e981d83880f7f1d6a4~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://bitespeed.co/' },
  { name: 'Cava', logo: 'https://static.wixstatic.com/media/16d720_7f0b184ed4994b4a8eecf39548fdb6a2~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://cavaathleisure.com/' },
  { name: 'Descrypt', logo: 'https://static.wixstatic.com/media/16d720_90378e9c9f174968bf2f9447d1d7001c~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.descrypt.com/' },
  { name: 'Fleek', logo: 'https://static.wixstatic.com/media/16d720_4552fc4cf1cf46efb18f76e1cf6c7c40~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.getfleek.app/' },
  { name: 'Gloroots', logo: 'https://static.wixstatic.com/media/16d720_50ee286a9e634c5eb16583085a41b2d8~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.gloroots.com/' },
  { name: 'Invesmint', logo: 'https://static.wixstatic.com/media/16d720_753210c8fd1546c28fcbe217f1b5f395~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.investmint.club/' },
  { name: 'Kofluence', logo: 'https://static.wixstatic.com/media/16d720_df37de66ed1f4c289f35475278159e14~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.kofluence.com/' },
  { name: 'MarianaAI', logo: 'https://static.wixstatic.com/media/16d720_68fa3642c2484a898ad7b332fe226330~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://marianaai.com/' },
  { name: 'Nector', logo: 'https://static.wixstatic.com/media/16d720_7eb0ad9143bf4587867fd32911bc19ad~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://nector.io/' },
  { name: 'Puch', logo: 'https://static.wixstatic.com/media/16d720_f01f4d7363f74786a75b0ae9482caac6~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://puch.ai/' },
  { name: 'Respct', logo: 'https://static.wixstatic.com/media/16d720_b44a12478dcb4806b111e1218d0157d4~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://respct.co/' },
  { name: 'Atomgrid', logo: 'https://static.wixstatic.com/media/16d720_72ebf18b692747d095cd473c92064b1e~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.atomgrid.in' },
  { name: 'Blockfenders', logo: 'https://static.wixstatic.com/media/16d720_2592450142124c17973f0156dfa274b4~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.blockfenders.com/' },
  { name: 'Crypso', logo: 'https://static.wixstatic.com/media/16d720_bec20922f98e4f00891984dac3de9b0a~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://crypso.club/' },
  { name: 'EthosX', logo: 'https://static.wixstatic.com/media/16d720_d314281b041f48b6a383aed8f9372da8~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://ethosx.xyz/' },
  { name: 'FunctionUp', logo: 'https://static.wixstatic.com/media/16d720_e0f6bc829c1443fb8cac34688f234db6~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://functionup.org/' },
  { name: 'Hobspace', logo: 'https://static.wixstatic.com/media/16d720_b3d721cbb6d647cf82d6b95cf5382f89~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://hobspace.com/in/' },
  { name: 'Jar', logo: 'https://static.wixstatic.com/media/16d720_5acfd1e795cb4c358097dcc44541b01b~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.myjar.app/' },
  { name: 'KoinBasket', logo: 'https://static.wixstatic.com/media/16d720_cb2dce3345064362bd058c5cd2414682~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.koinbasket.com/' },
  { name: 'Money Club', logo: 'https://static.wixstatic.com/media/16d720_12273cb796aa4816b876b87e6d0d7412~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://moneyclubber.com/' },
  { name: 'Nivasa Finance', logo: 'https://static.wixstatic.com/media/16d720_a029e876d7f5404a8701adc6a1810d63~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.nivasafinance.com/about' },
  { name: 'Precarmart', logo: 'https://static.wixstatic.com/media/16d720_d35a4aa5ceb74b178dcd798978a26d86~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.precarmart.com/' },
  { name: 'QuickLend', logo: 'https://static.wixstatic.com/media/16d720_33e6ce9f98624636b3be548622928a63~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.quicklend.in/' },
  { name: 'Rhym', logo: 'https://static.wixstatic.com/media/16d720_d5eba13652ec40b38c222c1faeddfa41~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.rhym.io/' },
  { name: 'Stan', logo: 'https://static.wixstatic.com/media/16d720_72946d91cd554139964072163051fefb~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://getstan.app/' },
  { name: 'TurboML', logo: 'https://static.wixstatic.com/media/16d720_4a641f7afdcd4c46a1ab67c6a4f26ee3~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://turboml.com/' },
  { name: 'Wherehouse', logo: 'https://static.wixstatic.com/media/16d720_0e9bbfdaf1a14b19a3202affefe5507d~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.wherehouse.io/' },
  { name: 'Zenopsys', logo: 'https://static.wixstatic.com/media/16d720_1015fd37d5414efcbb469a90c3e1d14b~mv2.jpg/v1/fill/w_162,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201_edited.jpg', url: 'https://www.zenopsys.ai/' },
];

const testimonials = [
  {
    quote: "Upsparks is the kind of investor every startup founder dreams of. The partners have been founders themselves and understand the nitty gritties of building a startup into a business. They've been strong sounding boards, great mentors, helped us connect with some of the strongest investors in the ecosystem and are always a text away. It has been amazing working with them. Thanks to Faraz, Vinay and Shivam that we continue to dream bigger every single day.",
    author: 'Nishchay Nath',
    role: 'Co-founder & CEO, Leaf Round',
    image: 'https://static.wixstatic.com/media/16d720_c210fcdef19d4e6bae34ca164d8175e1~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_393,h_551,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nischay.jpg',
  },
  {
    quote: "Upsparks has been a key catalyst in our journey, providing unwavering support during our early stages, guiding us through challenges, and igniting our company's growth flywheel with investment. Entire Upsparks team has been just a call away and inputs from them has been immensely helpful through our journey. Their vast network opened doors to invaluable connections, while their trust and transparency defined a strong bond, fostering a flourishing partnership. We are immensely grateful for their belief in our vision, and eagerly look forward to exploring synergies for many more future collaborations. Will definitely recommend Upsparks for any entrepreneur who is looking for right partner in their early journey.",
    author: 'Ritesh Ujjwal',
    role: 'Co-founder & CEO, Kofluence',
    image: 'https://static.wixstatic.com/media/16d720_12a60abf642645858e5f87e85e1d535c~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_394,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ritesh.jpg',
  },
  {
    quote: "Working with Upsparks has been a great experience for Arcab. Their constant mentorship, invaluable connections to VCs, and deep understanding of our challenges as founders have been instrumental in our growth. They are more than investors, they are true partners who genuinely care about our success. Their support has been transformative, and we are immensely proud of the achievements we've made together. I highly recommend Upsparks to any entrepreneur seeking a committed and impactful investor.",
    author: 'Bilal Shabandri',
    role: 'Co-founder & CEO, Arcab',
    image: 'https://static.wixstatic.com/media/16d720_0a7cf08195c144bfa6356d6672b8e5b2~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_394,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bilal.jpg',
  },
  {
    quote: "Faraz and the entire Upsparks team are your extended founding team. They have been through the same problems you are currently facing. They will go out of the way to make introductions and help you across the board in building your company. We are privileged to have partnered with them to build OneAssure.",
    author: 'Ruchir Kanakia',
    role: 'Founder, OneAssure',
    image: 'https://static.wixstatic.com/media/16d720_96067374255f4e5da609a175507f9713~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_394,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruchir.jpg',
  },
  {
    quote: "The Upsparks team are great partners to have in your camp. Their deep understanding and connections, combined with their visionary outlook, make them one of our most trusted strategic investors. They take all their past experience and concentrate it into the earliest stages of a startup as a pure value capital. Great at helping founders achieve growth while laying a long-term foundation. And great humans you'll enjoy knowing for the rest of your life.",
    author: 'Shubham Mishra',
    role: 'Co-founder & Global CEO - Pixis',
    image: 'https://static.wixstatic.com/media/16d720_5d1e137e189545219d4fe9ed2b9d8050~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_391,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shubham.jpg',
  },
  {
    quote: "Team Upsparks have been the best partners a startup could ask for. They're super helpful and always a call away. We're lucky to have them on our journey.",
    author: 'Vedant Maheshwari',
    role: 'Co-founder & CEO, Vidyo.ai',
    image: 'https://static.wixstatic.com/media/16d720_e64ad692c1034c5cba719b7830fb014f~mv2.jpg/v1/crop/x_30,y_0,w_448,h_627/fill/w_393,h_551,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vedant.jpg',
  },
];

// Flip Card Component
interface FlipCardProps {
  frontCompany: typeof partnerLogos[0];
  backCompany: typeof partnerLogos[0];
  index: number;
  isInView: boolean;
  onFlip: () => void;
}

function FlipCard({ frontCompany, backCompany, index, isInView, onFlip }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(prev => !prev);
    onFlip();
  };

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ 
        perspective: '1000px',
      }}
      onClick={handleFlip}
    >
      <div
        className="relative w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.02 }}
        >
          <a
            href={frontCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => {
              if (!isFlipped) {
                e.stopPropagation();
              } else {
                e.preventDefault();
              }
            }}
          >
            <img
              src={frontCompany.logo}
              alt={frontCompany.name}
              className="w-full h-auto max-h-24 object-contain pointer-events-none"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-24 flex items-center justify-center text-gray-400 text-xs';
                placeholder.textContent = frontCompany.name;
                target.parentElement?.appendChild(placeholder);
              }}
            />
          </a>
        </motion.div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <a
            href={backCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => {
              if (isFlipped) {
                e.stopPropagation();
              } else {
                e.preventDefault();
              }
            }}
          >
            <img
              src={backCompany.logo}
              alt={backCompany.name}
              className="w-full h-auto max-h-24 object-contain pointer-events-none"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-24 flex items-center justify-center text-gray-400 text-xs';
                placeholder.textContent = backCompany.name;
                target.parentElement?.appendChild(placeholder);
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Configuration: Display 16 cards initially (4x4 grid)
  const CARDS_TO_DISPLAY = 16;
  const TOTAL_COMPANIES = partnerLogos.length;
  
  // Split companies into groups for flip functionality
  // Each card shows one company on front, and cycles through remaining companies on back
  const [flipCounters, setFlipCounters] = useState<number[]>([]);
  
  // Testimonial carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  useEffect(() => {
    // Initialize flip counters for each card
    setFlipCounters(new Array(CARDS_TO_DISPLAY).fill(0).map(() => 0));
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, [isInView]);

  // Get companies for each card position
  const getCardCompanies = (cardIndex: number) => {
    const frontIndex = cardIndex % TOTAL_COMPANIES;
    const flipCounter = flipCounters[cardIndex] || 0;
    // Back company cycles through remaining companies
    const backIndex = (frontIndex + CARDS_TO_DISPLAY + flipCounter) % TOTAL_COMPANIES;
    
    return {
      front: partnerLogos[frontIndex],
      back: partnerLogos[backIndex],
    };
  };

  const handleCardFlip = (cardIndex: number) => {
    setFlipCounters((prev) => {
      const newCounters = [...prev];
      newCounters[cardIndex] = (newCounters[cardIndex] || 0) + 1;
      return newCounters;
    });
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            We've already helped 150+ founders go all in
          </h2>
        </motion.div>

        {/* Partner Logos Grid with Flip Cards */}
        <div className="mt-16 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Portfolio Companies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: CARDS_TO_DISPLAY }).map((_, index) => {
              const { front, back } = getCardCompanies(index);
              return (
                <FlipCard
                  key={`${index}-${flipCounters[index] || 0}`}
                  frontCompany={front}
                  backCompany={back}
                  index={index}
                  isInView={isInView}
                  onFlip={() => handleCardFlip(index)}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <Link href="/portfolio">
            <motion.a
              className="inline-block text-primary-500 font-semibold hover:text-primary-400 transition-colors cursor-pointer"
        >
          See our Portfolio →
        </motion.a>
          </Link>
        </motion.div>

        {/* Testimonial Section - Auto-rotating Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Voices from Our{' '}
            <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from founders who've gone all in with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg 
                className="w-12 h-12 text-primary-600 opacity-20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Testimonial Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Testimonial Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed font-light italic min-h-[200px] md:min-h-[150px]">
                  "{testimonials[currentTestimonialIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%239ca3af">${testimonials[currentTestimonialIndex].author.split(' ').map(n => n[0]).join('')}</text></svg>`)}`;
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonialIndex].author}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {testimonials[currentTestimonialIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8 pt-6 border-t border-gray-200">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
