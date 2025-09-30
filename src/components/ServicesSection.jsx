import {
  Package,
  Archive,
  Truck,
  CheckCircle,
  Users,
  MapPin,
  Clock,
  Repeat,
  FileText,
  Navigation,
  Globe,
  Shield,
  Briefcase,
  Cpu,
  Percent,
  Headphones,
} from 'feather-icons-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import cddImg from '../assets/cdd-truck.jpg';
import cdeImg from '../assets/cde-truck.jpg';
import fusoImg from '../assets/fuso-truck.jpg';
import trontonImg from '../assets/tronton-truck.jpg';

const ServicesSection = () => {
  return (
    <section id="services" className="pt-24 pb-12">
      <div className="container">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-12">
          {/* Title 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mx-auto mb-16 w-full text-center"
          >
            <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">layanan kami</h5>
            <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">
              Solusi Lengkap untuk Kebutuhan Logistik Anda
            </h1>
            <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
              Kami menyediakan berbagai layanan pengiriman yang dapat disesuaikan dengan kebutuhan bisnis dan personal
              Anda
            </p>
          </motion.div>

          {/* Content 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <Package className="text-white md:hidden" size={35} />
                <Package className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">
                Pengiriman antar gudang pabrik
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Layanan distribusi antar gudang atau lokasi produksi dengan armada yang handal dan jadwal yang
                fleksibel.
              </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <Archive className="text-white md:hidden" size={35} />
                <Archive className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">Warehousing</h1>
              <p className="text-inter mt-3 text-slate-800">
                Solusi penyimpanan barang dengan fasilitas gudang yang aman, terorganisir, dan terintegrasi dengan
                sistem manajemen logistik. Mendukung kebutuhan inventory, penyortiran, hingga distribusi sesuai
                permintaan.
              </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <Truck className="text-white md:hidden" size={35} />
                <Truck className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">
                Pengiriman LTL/FTL
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Layanan transportasi Less Than Truckload (LTL) maupun Full Truckload (FTL) untuk pengiriman antar kota
                atau antar pulau. Fleksibel sesuai volume dan kapasitas, dengan biaya efisien serta waktu pengiriman
                yang dapat disesuaikan.
              </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <CheckCircle className="text-white md:hidden" size={35} />
                <CheckCircle className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">
                Asuransi Pengiriman
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Perlindungan tambahan untuk setiap pengiriman Anda dengan opsi asuransi yang menjamin keamanan barang
                dari risiko kerusakan maupun kehilangan selama perjalanan. Memberikan rasa aman dan kepastian dalam
                setiap transaksi logistik.
              </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <Users className="text-white md:hidden" size={35} />
                <Users className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">
                Layanan Konsultan Logistik
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Pendampingan profesional dalam merancang strategi logistik, manajemen rantai pasok, serta optimalisasi
                biaya distribusi. Cocok bagi perusahaan yang ingin meningkatkan efisiensi operasional sekaligus
                memperkuat daya saing bisnis.
              </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-r from-white via-blue-200 to-blue-300 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 md:h-20 md:w-20">
                <MapPin className="text-white md:hidden" size={35} />
                <MapPin className="hidden text-white md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 uppercase md:text-xl">
                Layanan pelacakan barang secara real-time
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Layanan pelacakan barang secara real-time memungkinkan pelanggan memantau posisi dan status pengiriman
                setiap saat. Dengan sistem tracking online 24/7, Anda dapat memastikan barang selalu dalam kendali,
                meningkatkan transparansi, serta memberikan rasa aman dan kepastian waktu kedatangan.
              </p>
            </div>
          </motion.div>

          {/* Title 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mx-auto mb-16 w-full pt-15 text-center"
          >
            <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">Sewa Truck</h5>
            <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">Layanan Sewa Truck</h1>
            <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
              Armada lengkap dengan sopir profesional untuk kebutuhan logistik Anda
            </p>
          </motion.div>

          {/* Content 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="grid grid-cols-1 items-start gap-10 md:grid-cols-2"
          >
            <div className="w-full rounded-xl bg-gradient-to-b from-white via-blue-200 to-blue-300 p-6 text-center shadow-lg shadow-black/25">
              <div className="shadow-black.20 h-1/2 overflow-hidden rounded-lg shadow-md">
                <img src={cddImg} alt="" className="h-70 w-full object-cover object-center" />
              </div>
              <h1 className="font-montserrat mt-5 text-2xl font-bold text-blue-700 md:text-3xl">Truck CDD</h1>
              <p className="font-inter font-thin uppercase">Light Duty</p>
              <div className="w-full rounded-lg bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 shadow-lg shadow-black/20">
                <div className="mt-10 p-4 text-left">
                  <div>
                    <h3 className="font-inter">Kapasitas</h3>
                    <h2 className="text-primary font-montserrat font-bold">2-3 TON</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Dimensi</h3>
                    <h2 className="text-primary font-montserrat font-bold">3.5 x 1.8 m</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Area</h3>
                    <h2 className="text-primary font-montserrat font-bold">Dalam Kota</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Mesin</h3>
                    <h2 className="text-primary font-montserrat font-bold">125 HP</h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 text-black/30" />
              <a
                href="https://wa.me/6285278412070?text=Halo%2C%20saya%20ingin%20menyewa%20truk%20CDD?"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter mx-auto mt-5 inline-flex cursor-pointer rounded-2xl bg-blue-600 px-7 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-95 hover:opacity-80 md:text-xl"
              >
                Pesan
              </a>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-b from-white via-blue-200 to-blue-300 p-6 text-center shadow-lg shadow-black/25">
              <div className="shadow-black.20 h-1/2 overflow-hidden rounded-lg shadow-md">
                <img src={cdeImg} alt="" className="h-70 w-full object-cover object-center" />
              </div>
              <h1 className="font-montserrat mt-5 text-2xl font-bold text-blue-700 md:text-3xl">Truck CDE</h1>
              <p className="font-inter font-thin uppercase">Medium Duty</p>
              <div className="w-full rounded-lg bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 shadow-lg shadow-black/20">
                <div className="mt-10 p-4 text-left">
                  <div>
                    <h3 className="font-inter">Kapasitas</h3>
                    <h2 className="text-primary font-montserrat font-bold">4-5 Ton</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Dimensi</h3>
                    <h2 className="text-primary font-montserrat font-bold">4.5 x 2.0 m</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Area</h3>
                    <h2 className="text-primary font-montserrat font-bold">Antar Kota</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Mesin</h3>
                    <h2 className="text-primary font-montserrat font-bold">150 HP</h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 text-black/30" />
              <a
                href="https://wa.me/6285278412070?text=Halo%2C%20saya%20ingin%20menyewa%20truk%20CDE?"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter mx-auto mt-5 inline-flex cursor-pointer rounded-2xl bg-blue-600 px-7 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-95 hover:opacity-80 md:text-xl"
              >
                Pesan
              </a>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-b from-white via-blue-200 to-blue-300 p-6 text-center shadow-lg shadow-black/25">
              <div className="shadow-black.20 h-1/2 overflow-hidden rounded-lg shadow-md">
                <img src={fusoImg} alt="" className="h-70 w-full object-cover object-center" />
              </div>
              <h1 className="font-montserrat mt-5 text-2xl font-bold text-blue-700 md:text-3xl">Truck Fuso</h1>
              <p className="font-inter font-thin uppercase">Heavy Duty</p>
              <div className="w-full rounded-lg bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 shadow-lg shadow-black/20">
                <div className="mt-10 p-4 text-left">
                  <div>
                    <h3 className="font-inter">Kapasitas</h3>
                    <h2 className="text-primary font-montserrat font-bold">6-8 Ton</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Dimensi</h3>
                    <h2 className="text-primary font-montserrat font-bold">6.0 x 2.3 m</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Area</h3>
                    <h2 className="text-primary font-montserrat font-bold">Nasional</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Mesin</h3>
                    <h2 className="text-primary font-montserrat font-bold">190 HP</h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 text-black/30" />
              <a
                href="https://wa.me/6285278412070?text=Halo%2C%20saya%20ingin%20menyewa%20truk%20Fuso?"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter mx-auto mt-5 inline-flex rounded-2xl bg-blue-600 px-7 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-95 hover:opacity-80 md:text-xl"
              >
                Pesan
              </a>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-b from-white via-blue-200 to-blue-300 p-6 text-center shadow-lg shadow-black/25">
              <div className="shadow-black.20 h-1/2 overflow-hidden rounded-lg shadow-md">
                <img src={trontonImg} alt="" className="h-70 w-full object-cover object-center" />
              </div>
              <h1 className="font-montserrat mt-5 text-2xl font-bold text-blue-700 md:text-3xl">Truck Tronton</h1>
              <p className="font-inter font-thin uppercase">Extra Heavy Duty</p>
              <div className="w-full rounded-lg bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 shadow-lg shadow-black/20">
                <div className="mt-10 p-4 text-left">
                  <div>
                    <h3 className="font-inter">Kapasitas</h3>
                    <h2 className="text-primary font-montserrat font-bold">15-20 Ton</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Dimensi</h3>
                    <h2 className="text-primary font-montserrat font-bold">9.0 x 2.4 m</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Area</h3>
                    <h2 className="text-primary font-montserrat font-bold">Nasional</h2>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-inter">Mesin</h3>
                    <h2 className="text-primary font-montserrat font-bold">260 HP</h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 text-black/30" />
              <a
                href="https://wa.me/6285278412070?text=Halo%2C%20saya%20ingin%20menyewa%20truk%20Tronton?"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter mx-auto mt-5 inline-flex rounded-2xl bg-blue-600 px-7 py-2 font-semibold cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-95 hover:opacity-80 md:text-xl"
              >
                Pesan
              </a>
            </div>
          </motion.div>

          {/* Tilte 3 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mx-auto mt-15 mb-16 w-full text-center"
          >
            <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">
              Keunggulan Kami
            </h5>
            <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">Yang Membuat Kami Berbeda</h1>
            <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
              Komitmen kami adalah memberikan layanan terbaik dengan standar tertinggi di industri logistik
            </p>
          </motion.div>

          {/* Content 3 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <Clock className="text-blue-600 md:hidden" size={35} />
                <Clock className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">Garansi Tepat Waktu</h1>
              <p className="text-inter mt-3 text-slate-800">
                Kami menjamin setiap pengiriman tiba sesuai estimasi waktu yang telah dijanjikan.
              </p>
            </div>

            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <Repeat className="text-blue-600 md:hidden" size={35} />
                <Repeat className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">Pengiriman Flexible</h1>
              <p className="text-inter mt-3 text-slate-800">
                Layanan yang dapat disesuaikan dengan kebutuhan Anda, baik dalam jumlah, jenis barang, maupun waktu
                pengiriman.
              </p>
            </div>

            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <FileText className="text-blue-600 md:hidden" size={35} />
                <FileText className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">Pendataan Akurat</h1>
              <p className="text-inter mt-3 text-slate-800">
                Setiap barang tercatat dengan sistem yang rapi dan detail, sehingga meminimalkan risiko kesalahan.
              </p>
            </div>

            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <Navigation className="text-blue-600 md:hidden" size={35} />
                <Navigation className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">Real-time Tracking</h1>
              <p className="text-inter mt-3 text-slate-800">
                Pantau posisi barang Anda kapan saja dengan sistem pelacakan online 24/7.
              </p>
            </div>

            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <Globe className="text-blue-600 md:hidden" size={35} />
                <Globe className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">
                Mengcover Area Nasional
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Jaringan layanan kami mencakup seluruh wilayah Indonesia, dari kota besar hingga pelosok.
              </p>
            </div>

            <div className="w-full rounded-xl border-t-4 border-blue-700 bg-white p-6 text-center shadow-sm shadow-black/20">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-br from-blue-300 via-blue-200 to-white md:h-20 md:w-20">
                <Shield className="text-blue-600 md:hidden" size={35} />
                <Shield className="hidden text-blue-600 md:inline" size={45} />
              </span>
              <h1 className="font-montserrat mt-5 text-lg font-bold text-blue-600 md:text-xl">
                Penanganan Aman & Terjamin
              </h1>
              <p className="text-inter mt-3 text-slate-800">
                Barang Anda ditangani oleh tim profesional dengan standar keamanan tinggi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mt-20 rounded-4xl bg-blue-500 px-8 py-6 shadow-lg shadow-black/30"
          >
            {/* Title 4 */}
            <div className="mx-auto mb-16 w-full text-center">
              <h5 className="font-montserrat text-sm font-semibold text-white uppercase md:text-base">
                Pilihan Terbaik
              </h5>
              <h1 className="font-inter mt-3 text-3xl font-bold text-white md:text-3xl">Mengapa Memilih Kami?</h1>
              <p className="font-inter mx-auto mt-5 w-5/6 text-white">
                Banyak pelanggan telah mempercayai kami sebagai partner logistik mereka.
              </p>
            </div>

            {/* Content 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="w-full gap-4 rounded-xl bg-blue-100/40 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md md:flex md:text-left">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-15 md:w-23 lg:w-40 xl:w-30 2xl:w-23">
                  <Briefcase className="text-blue-600 md:hidden" size={35} />
                  <Briefcase className="hidden text-blue-600 md:inline" size={45} />
                </span>
                <div>
                  <h1 className="font-montserrat mt-5 text-lg font-bold text-white md:mt-0 md:text-xl">
                    Pengalaman Yang Luas
                  </h1>
                  <p className="text-inter mt-3 text-white/90 md:mt-0">
                    Kami memiliki pengalaman yang luas dalam menangani berbagai jenis pengiriman dengan pelayanan
                    profesional.
                  </p>
                </div>
              </div>

              <div className="w-full gap-4 rounded-xl bg-blue-100/40 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md md:flex md:text-left">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-15 md:w-21 lg:w-35 xl:w-26 2xl:w-22">
                  <Cpu className="text-blue-600 md:hidden" size={35} />
                  <Cpu className="hidden text-blue-600 md:inline" size={45} />
                </span>
                <div>
                  <h1 className="font-montserrat mt-5 text-lg font-bold text-white md:mt-0 md:text-xl">
                    Teknologi Terkini
                  </h1>
                  <p className="text-inter mt-3 text-white/90 md:mt-0">
                    Menggunakan teknologi canggih untuk memastikan keamanan dan ketepatan waktu pengiriman.
                  </p>
                </div>
              </div>

              <div className="w-full gap-4 rounded-xl bg-blue-100/40 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md md:flex md:text-left">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-15 md:w-17 lg:w-30 xl:w-20 2xl:w-17">
                  <Percent className="text-blue-600 md:hidden" size={35} />
                  <Percent className="hidden text-blue-600 md:inline" size={45} />
                </span>
                <div>
                  <h1 className="font-montserrat mt-5 text-lg font-bold text-white md:mt-0 md:text-xl">
                    Harga Yang Kompetitif
                  </h1>
                  <p className="text-inter mt-3 text-white/90 md:mt-0">
                    Kami menawarkan harga yang terjangkau dan dapat dijangkau oleh semua kalangan.
                  </p>
                </div>
              </div>

              <div className="w-full gap-4 rounded-xl bg-blue-100/40 p-6 text-center shadow-sm shadow-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md md:flex md:text-left">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-15 md:w-21 lg:w-36 xl:w-25 2xl:w-20">
                  <Headphones className="text-blue-600 md:hidden" size={35} />
                  <Headphones className="hidden text-blue-600 md:inline" size={45} />
                </span>
                <div>
                  <h1 className="font-montserrat mt-5 text-lg font-bold text-white md:mt-0 md:text-xl">
                    Layanan Pelanggan Responsif
                  </h1>
                  <p className="text-inter mt-3 text-white/90 md:mt-0">
                    Tim support kami selalu siap membantu Anda dengan cepat dan ramah, kapan pun dibutuhkan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
