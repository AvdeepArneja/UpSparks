'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

export default function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Portfolio
            </h1>
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="text-lg text-gray-600">
            We've helped 150+ founders go all in. Here are all our portfolio companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partnerLogos.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto max-h-20 object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-20 flex items-center justify-center text-gray-400 text-xs';
                  placeholder.textContent = partner.name;
                  target.parentElement?.appendChild(placeholder);
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
