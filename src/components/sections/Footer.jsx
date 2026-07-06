import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#6A4D05] text-background py-8 px-6 md:px-10 lg:px-28">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
        <p>Dra. Ana Silva · CRP 06/000000</p>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-xl transition-all duration-300 hover:text-secondary hover:scale-110"
          >
            <BsInstagram />
          </a>

          <p>© 2026 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
