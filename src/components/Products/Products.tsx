import Nugget from "../../assets/nugget.png";
import Sunny from "../../assets/sunny-gold.png";
import Fiesta from "../../assets/fiesta.png";
import SoGood from "../../assets/so-good.png";
import Kimbo from "../../assets/sosis.png";
import Bernardi from "../../assets/bernardi.png";

const Projects = () => {
  return (
    <section className="relative z-0 bg-primary p-10 sm:p-10 mt-20">
      <div className="container mx-auto relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-secondary"
        >
          Produk
        </h2>
        <div className="flex flex-wrap mt-10 justify-center gap-8">
          {/* Product Item */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img src={Nugget} alt="" className="w-72 sm:w-3/5 lg:w-22" />
            <h3 className="mt-4 mb-2 text-lg font-bold">
              Chicken Nugget Kanzler
            </h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Nugget Kanzler merupakan Chicken Nugget premium yang terbuat dari
              daging ayam pilihan, renyah diluar dan juicy didalam.
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-10 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img src={Sunny} alt="" className="w-72 sm:w-3/5 lg:w-22" />
            <h3 className="mt-4 mb-2 text-lg font-bold">
              Chicken Stick Sunny Gold
            </h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Terbuat dari daging ayam pilihan dibalut dengan racikan premix
              tepung karaage, membuat Sunny Gold Chicken Stick ini menjadi
              olahan yang lezat dan bergizi.
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img src={Fiesta} alt="fiesta" className="w-72 sm:w-3/5 lg:w-22" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Fiesta Karage</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Makanan instan berupa daging Ayam goreng yang terbuat dari daging
              Ayam pilihan yang dikemas secara higienis, sehat dan praktis
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-14 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img src={SoGood} alt="so-good" className="w-72 sm:w-3/5 lg:w-22" />
            <h3 className="mt-4 mb-2 text-lg font-bold">
              Chicken Wings So Good
            </h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              So Good menghadirkan Spicy Chicken Wings, sayap ayam pilihan penuh
              kelezatan dengan kombinasi rasa pedas manis kaya akan bumbu dan
              meresap hingga ke dalam setiap gigitannya.
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-8 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img src={Kimbo} alt="" className="w-72 sm:w-3/5 lg:w-22" />
            <h3 className="mt-4 mb-2 text-lg font-bold">
              Kimbo Sosis Sapi Goreng
            </h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Dibuat dengan daging sapi asli yang diimpor dari Australia berpadu
              dengan racikan bumbu spesial akan menambah nikmat masakan yang
              disajikan.
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-7 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-center rounded-lg"
          >
            <img
              src={Bernardi}
              alt="bernardi"
              className="w-72 sm:w-3/5 lg:w-22"
            />
            <h3 className="mt-4 mb-2 text-lg font-bold">
              Bernardi Smoked Beef
            </h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Rasakan kenikmatan daging asap berkualitas tinggi dengan Bernardi
              Smoked Beef. Dibuat dari daging sapi pilihan yang diproses dengan
              metode pengasapan tradisional.
            </p>
            <a
              href="https://wa.me/+6282114708006"
              className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
            >
              Klik untuk Pesan!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
