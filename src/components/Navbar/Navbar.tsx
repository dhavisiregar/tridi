const Navbar = () => {
  return (
    <div
      data-aos="fade"
      className="fixed w-screen z-10 bg-white text-black shadow-md sm:grid-cols-2"
    >
      <div className="container text-primary flex justify-between py-4 sm:py-3">
        {/* logo section */}
        <a
          href="#home"
          className="font-bold text-secondary hover:text-primary text-3xl "
        >
          TriDi
        </a>

        {/* navlinks section */}
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#profil"
                className="inline-block hover:text-secondary text-xl font-semibold"
              >
                Profil
              </a>
            </li>
            <li>
              <a
                href="#produk"
                className="inline-block hover:text-secondary text-xl font-semibold"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="inline-block hover:text-secondary text-xl font-semibold"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
