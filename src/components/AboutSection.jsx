import aboutImg from '../assets/about-img.jpg';
import { Target, Navigation } from 'feather-icons-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-12">
      <div className="container">
        <div className="mx-auto w-full px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mx-auto mb-16 w-full text-center"
          >
            <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">Tentang Kami</h5>
            <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">Logistik Cepat dan Tepat</h1>
            <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
              Melayani pengiriman dengan komitmen tinggi untuk kecepatan, keamanan, dan kepuasan pelanggan di seluruh
              Indonesia
            </p>
          </motion.div>

          {/* Content */}
          <div className="flex w-full flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-2xl shadow-lg shadow-black/25 lg:w-[47%]"
            >
              <img src={aboutImg} alt="about-img" className="h-full w-full object-cover object-center" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="mt-5 w-full lg:mt-0 lg:w-[47%]"
            >
              <h2 className="font-montserrat text-[1.8rem] font-bold text-blue-800 md:text-3xl">
                Mitra Logistik Pilihan Anda
              </h2>
              <p className="font-inter mt-4 text-slate-700">
                Sang owner PT Perdana Putra Majalengka, telah malang melintang di dunia logistik sejak
                tahun 2016. Dedikasi dan profesionalismenya mengantarkan perusahaan ini berkembang menjadi penyedia
                layanan logistik terpercaya di Jawa dan Indonesia pada umumnya. Seiring dengan kemajuan pesat usahanya,
                sang owner pun mengambil langkah strategis untuk meningkatkan profesionalitas dengan mengurus perizinan
                resmi pada tahun 2024.
              </p>
              <p className="font-inter mt-5 text-slate-700">
                Pengalaman dan komitmen sang owner, dipadukan dengan legalitas perusahaan yang resmi, menjadikan
                PT Perdana Putra Majalengka sebagai mitra yang handal untuk kebutuhan logistik Anda. Sekarang PT Perdana
                Putra Majalengka dikenal sebagai perusahaan logistik yang fokus pada pengiriman barang dari gudang
                pabrik ke gudang pabrik.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:w-[97%]">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="rounded-xl bg-blue-500 p-4 text-white shadow-lg shadow-black/20"
            >
              <div className="flex gap-2 pb-3">
                <span>
                  <Navigation size={30} />
                </span>
                <h2 className="font-montserrat text-lg font-bold md:text-xl">Visi Kami</h2>
              </div>
              <p className="font-inter">
                Menjadi perusahaan logistik terkemuka di Indonesia, yang terpercaya dan profesional dalam melayani
                pengiriman barang dari gudang pabrik ke gudang pabrik.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="rounded-xl bg-blue-500 py-4 px-8 text-white shadow-lg shadow-black/20"
            >
              <div className="flex gap-2 pb-3">
                <span>
                  <Target size={30} />
                </span>
                <h2 className="font-montserrat text-lg font-bold md:text-xl">Misi Kami</h2>
              </div>
              <ul className='font-inter'>
                <li className='list-disc'>
                  Meningkatkan kualitas layanan logistik dengan menerapkan teknologi terkini dan memanjakan pelanggan
                  dengan pelayanan yang prima.
                </li>
                <li className='list-disc'>Memperluas jangkauan layanan ke seluruh wilayah di Jawa Barat dan sekitarnya.</li>
                <li className='list-disc'>Menjaga komitmen terhadap tanggung jawab sosial dan lingkungan.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
