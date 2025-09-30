// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { PhoneCall } from 'feather-icons-react';
import { MessageCircle } from 'feather-icons-react';
import { Mail } from 'feather-icons-react';
import { MessageSquare } from 'feather-icons-react';
import { PhoneIncoming } from 'feather-icons-react';

const ContactSection = () => {
  return (
    <section id="contact" className="pt-28 pb-12">
      <div className="mx-auto w-full px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mx-auto mb-16 w-full text-center"
        >
          <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">Hubungi Kami</h5>
          <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">Kami Siap Melayani Anda</h1>
          <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
            Tim customer service kami siap membantu kebutuhan logistik Anda kapan saja
          </p>
        </motion.div>

        {/* Content 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex w-full flex-wrap justify-center gap-8"
        >
          <div className="border-primary w-full rounded-xl border-t-8 px-6 py-8 text-center shadow-lg shadow-black/20 md:w-[47%]">
            <h1 className="text-primary font-montserrat text-left text-xl font-bold md:text-2xl">Informasi Kontak</h1>
            <div className="mt-10 flex gap-4 rounded-xl border-l-4 border-blue-600 px-5 py-8 shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <span>
                  <PhoneCall size={30} />
                </span>
              </div>
              <div className="text-left">
                <h3 className="font-inter font-bold text-blue-800">Telepon</h3>
                <h2 className="font-inter text-slate-700">+62 852-7841-2070</h2>
              </div>
            </div>

            <div className="mt-5 flex gap-4 rounded-xl border-l-4 border-blue-600 px-5 py-8 shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <span>
                  <MessageCircle size={30} />
                </span>
              </div>
              <div className="text-left">
                <h3 className="font-inter font-bold text-blue-800">WhatsApp</h3>
                <h2 className="font-inter text-slate-700">+62 852-7841-2070</h2>
              </div>
            </div>

            <div className="mt-5 flex gap-4 rounded-xl border-l-4 border-blue-600 px-5 py-8 shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white md:px-4">
                <span>
                  <Mail size={30} />
                </span>
              </div>
              <div className="text-left">
                <h3 className="font-inter font-bold text-blue-800">Email</h3>
                <h2 className="font-inter text-slate-700">perdanaputra91@hotmail.com</h2>
              </div>
            </div>
          </div>

          <div className="border-primary w-full rounded-xl border-t-8 px-6 py-8 text-center shadow-lg shadow-black/20 md:w-[47%]">
            <h1 className="text-primary font-montserrat text-left text-xl font-bold md:text-2xl">Perusahaan Kami</h1>
            <div className="mt-10 w-full overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.794758660504!2d108.33990227531531!3d-6.672334293322741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ed94cea2439dd%3A0x6c4f6081c2876a5e!2sJl.%20Raya%20Cidenok%2C%20Kec.%20Sumberjaya%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat%2045455!5e0!3m2!1sid!2sid!4v1759215593805!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Content 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mx-auto mt-15 w-full rounded-xl bg-blue-600 px-10 py-14 text-center shadow-lg shadow-black/30 md:w-[80%] md:rounded-4xl"
        >
          <h1 className="font-montserrat mb-5 text-2xl font-bold text-white md:text-3xl">Butuh Bantuan Sekarang?</h1>
          <p className="text-lg text-white md:text-xl">
            Hubungi kami melalui WhatsApp untuk respon cepat dan konsultasi gratis!
          </p>
          <div className="mx-auto mt-7 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:w-[50%]">
            <a
              href="https://wa.me/6285278412070?text=Halo%20saya%20tertarik%20dengan%20layanan%20logistik%20PT%20Perdana%20Putra%20Majalengka.%20Bisa%20minta%20informasi%20lebih%20lanjut?"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-green-400 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span>
                <MessageSquare />
              </span>
              Chat via WhatsApp
            </a>
            <a
              href="tel:+6285278412070"
              className="font-montserrat mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-bold text-blue-600 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span>
                <PhoneIncoming />
              </span>
              Telepon Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
