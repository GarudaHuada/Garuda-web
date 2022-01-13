import logoBackground from "../assets/logo_background.png";
import { contact } from "../data.json";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid gap-4 py-8 lg:gap-0 lg:grid-cols-3 lg:py-14">
        <div className="divide-y divide-solid">
          <div className="text-2xl font-semibold">Tentang</div>
          <p className="py-4 text-justify">
            Garuda adalah organisasi mahasiswa Indonesia yang menerima beasiswa
            keguruan Mandarin, yang kuliah di Huaqiao University 
            jurusan pendidikan bahasa Mandarin.
          </p>
        </div>

        <div className="flex justify-center items-center -order-1 lg:order-none">
          <img src={logoBackground} alt="logo" className="w-32 lg:w-auto" />
        </div>

        <div className="divide-y divide-solid">
          <div className="text-2xl font-semibold">Kontak</div>
          <ul className="py-4 text-justify flex flex-col gap-4">
            {contact.map(({ id, link, icon, text }) => {
              return (
                <li key={id}>
                  <a
                    href={link}
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <img src={icon} alt="" />
                    <span>{text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
