import Hero from "../../assets/toko.jpg";

const Profile = () => {
  return (
    <div className="relative z-0 bg-white px-4 sm:px-10 mt-12">
      <div className="container mx-auto py-16 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* text content section */}
          <div className="space-y-7 order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl text-primary lg:text-7xl text-center font-bold"
            >
              Tentang Kami
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-justify font-bold text-sm sm:text-base lg:text-lg"
            >
              Di TriDi Frozen Food, kami sangat prioritaskan untuk menghadirkan
              produk <i>frozen food</i> dengan kualitas terbaik untuk Anda. Misi
              kami adalah menyediakan pilihan yang lezat, nyaman, dan bergizi
              yang membuat persiapan makanan menjadi lebih mudah bagi Anda dan
              keluarga.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-justify font-bold text-sm sm:text-base lg:text-lg"
            >
              Untuk kami, kepuasan Anda adalah prioritas utama kami. Kami selalu
              siap mendengarkan masukan dan saran dari pelanggan untuk terus
              memperbaiki dan meningkatkan produk serta layanan kami. Terima
              kasih telah mempercayakan kebutuhan <i>frozen food</i> Anda kepada
              kami. Kami berharap dapat terus menjadi bagian dari kebahagiaan
              dan kesehatan keluarga Anda.
            </p>
          </div>

          {/* image section */}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              src={Hero}
              alt="toko"
              className="shadow-2xl rounded-md w-full sm:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
