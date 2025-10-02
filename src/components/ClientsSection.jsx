// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { StarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const ClientsSection = () => {
  return (
    <section id="clients" className="pt-28 pb-16">
      <div className="container">
        <div className="mx-auto w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mx-auto mb-16 w-full text-center"
          >
            <h5 className="font-montserrat text-sm font-semibold text-blue-500 uppercase md:text-base">
              TESTIMONI PELANGGAN
            </h5>
            <h1 className="font-inter mt-3 text-3xl font-bold text-blue-800 md:text-3xl">Apa Kata Klien Kami</h1>
            <p className="font-inter mx-auto mt-5 w-5/6 text-slate-600">
              Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Perusahaan kami sudah beberapa kali menggunakan jasa logistik ini untuk distribusi barang ke berbagai
                  daerah. Armada yang disediakan selalu dalam kondisi baik dan sopirnya berpengalaman. Pengiriman selalu
                  tepat waktu sehingga kegiatan operasional kami berjalan lancar. Kami merasa sangat terbantu dengan
                  layanan yang profesional ini."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">MT</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> Mutiara Trans
                </h2>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Kami mempercayakan pengiriman produk kepada jasa logistik ini dan hasilnya selalu memuaskan. Truk
                  datang sesuai jadwal, proses muat barang berjalan lancar, dan semua barang sampai dengan aman. Biaya
                  jelas sejak awal tanpa ada tambahan yang tidak terduga. Layanan ini membuat kami lebih tenang dalam
                  menjalankan bisnis."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">AS</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> ATS
                </h2>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Jasa logistik ini sangat membantu saya saat harus mengirim produk dalam jumlah banyak ke pelanggan.
                  Sopirnya ramah, komunikatif, dan tahu rute dengan baik sehingga barang tiba lebih cepat dari
                  perkiraan. Biaya juga jelas sejak awal, tidak ada biaya tambahan. Layanan seperti ini bikin saya
                  merasa tenang."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">CL</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> Caswa Logistik
                </h2>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Sudah beberapa kali perusahaan kami menggunakan layanan sewa truk dari sini, dan selalu merasa puas.
                  Armada yang disediakan cukup banyak pilihan dan terawat dengan baik. Pengiriman rutin ke berbagai kota
                  berjalan lancar tanpa ada keterlambatan. Ini benar-benar mendukung kelancaran distribusi usaha kami."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">SB</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> SCB
                </h2>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Sebagai pemilik usaha, saya butuh mitra logistik yang cepat dan terpercaya. Untungnya saya menemukan
                  layanan ini. Customer service selalu cepat merespons, armada tersedia sesuai kebutuhan, dan semua
                  pengiriman ke luar pulau berjalan lancar. Rasanya lebih tenang karena saya tahu barang sampai tujuan
                  tepat waktu."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">PI</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> PBI
                </h2>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-lg shadow-black/25">
              <div className="flex justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1">
                  <div className="text-blue-700">
                    <div>
                      <CheckCircleIcon className="h-4 w-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.7rem] font-semibold text-blue-700">Terverifikasi</p>
                </div>
              </div>
              <div className="font-inter mt-6 text-slate-700">
                <p className="text-sm italic md:text-base">
                  "Layanan sewa truk ini bisa diandalkan, apalagi untuk kebutuhan pengiriman barang dalam skala besar.
                  Truk yang datang kondisinya bagus dan bersih, sehingga saya merasa aman menitipkan barang. Sopirnya
                  juga berpengalaman dan profesional. Dengan harga yang cukup bersaing, menurut saya ini salah satu jasa
                  terbaik."
                </p>
              </div>
              <hr className="mt-8 text-black/20" />
              <div className="mt-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <h3 className="font-montserrat font-bold text-white">PH</h3>
                </div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <span className="text-blue-700">PT</span> Prian Hasanah
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
