import logoImg from '../assets/favicon-96x96.png'

const Footer = () => {
  return (
    <footer className="pt-16 pb-4 mt-24 bg-primary">
      <div className="container">
        <div className="w-full mx-auto px-4">
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 justify-center'>
            <div className='xl:pl-20'>
              <div className='flex items-center gap-2'>
                <span><img src={logoImg} alt="" /></span>
                <h1 className='text-white text-3xl font-bold font-montserrat'>Jasa Logistik</h1>
              </div>
              <p className='text-white pl-4 font-inter mt-4'>Kami menyediakan layanan logistik yang cepat, aman, dan handal, memastikan setiap pengiriman sampai tepat waktu dan dalam kondisi terbaik.</p>
            </div>
            <div className='pl-4 md:pl-[30%] mt-5'>
              <h3 className='text-2xl text-white font-bold'>Navigasi</h3>
              <ul className='mt-5 text-white font-inter'>
                <li className="mb-2">
                  <a href="#home">Beranda</a>
                </li>
                <li className="mb-2">
                  <a href="#about">Tentang Kami</a>
                </li>
                <li className="mb-2">
                  <a href="#services">Layanan</a>
                </li>
                <li className="mb-2">
                  <a href="#contact">Kontak</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className='mt-10 text-white/40' />
          <p className='text-center mt-5 text-white text-xs md:text-sm'>© 2025 PT Perdana Putra Majalengka. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
