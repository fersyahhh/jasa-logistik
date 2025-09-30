import heroImage from '../assets/hero-img.jpg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center md:h-[800px] lg:h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative container">
        <div className="absolute top-50 left-0 mx-auto h-auto w-full px-4 md:top-60 md:left-5 lg:top-30 xl:top-60 xl:left-24">
          <div className="w-5/6 text-left text-white md:w-3/4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <h1 className="font-montserrat text-4xl font-bold md:text-6xl">
                <span className="text-blue-600">PT Perdana Putra</span> <span className="underline">Majalengka</span>
              </h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="font-inter pt-2 text-2xl font-semibold md:text-4xl"
            >
              Solusi Logistik Tepat Waktu dan Terpercaya
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="font-inter flex flex-wrap gap-4 pt-5"
          >
            <a
              href="https://wa.me/6285278412070?text=Halo%20saya%20tertarik%20dengan%20layanan%20logistik%20PT%20Perdana%20Putra%20Majalengka.%20Bisa%20minta%20informasi%20lebih%20lanjut?"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-blue-600/80 px-4 py-2 text-lg text-white transition-all duration-300 ease-in-out hover:scale-95 md:text-xl"
            >
              Kontak Kami
            </a>
            <a
              href="#services"
              className="rounded-2xl bg-blue-600/80 px-4 py-2 text-lg text-white transition-all duration-300 ease-in-out hover:scale-95 md:text-xl"
            >
              Lihat Selengkapnya
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
