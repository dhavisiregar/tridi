import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-white sm:grid-cols-2 pb-10 justify-center flex">
      <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* header section */}
        <div className="flex justify-center">
          <div className="col-span-full">
            <h1 className="py-10 text-primary text-4xl md:text-5xl lg:text-7xl font-bold text-center">
              Kontak kami!
            </h1>
          </div>
        </div>

        {/* map section */}
        <div className="flex flex-row justify-center gap-32">
          <div className="text-center text-primary space-y-4">
            <div className="flex justify-center">
              <FaLocationDot className="text-3xl md:text-5xl" />
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/YZ2yYfJVjFZvRt8J9"
                className="text-lg md:text-xl"
              >
                TriDi Frozen Food
              </a>
            </div>
          </div>

          {/* wa section */}
          <div className="text-center text-primary space-y-4">
            <div className="flex justify-center">
              <IoLogoWhatsapp className="text-3xl md:text-5xl" />
            </div>
            <div>
              <a
                href="https://wa.me/+6282114708006"
                className="text-xl md:text-xl"
              >
                +62 821 1470 8006
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
