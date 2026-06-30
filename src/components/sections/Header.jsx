import Button from "../Button";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#F5F0EC]/30 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between max-w-7xl mx-auto items-center px-8 py-4 md:p-4">
        <div className="flex flex-col">
          <h2 className="text-xl text-primary font-playfair">Dra. Ana Silva</h2>
          <span className="text-[.8rem] text-text-muted">PSICOLOGIA</span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <ul className="hidden md:flex text-primary-dark font-inter space-x-6">
            <li className="hover:text-primary">
              <a href="#inicio">Início</a>
            </li>
            <li className="hover:text-primary">
              <a href="#especialidades">Especialidades</a>
            </li>
            <li className="hover:text-primary">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="hover:text-primary">
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li className="hover:text-primary">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Button>Agendar</Button>
        </div>

        <button
          className="md:hidden text-primary text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col w-full p-3 bg-background-alt">
          <li className="text-primary p-3 hover:bg-primary hover:text-surface rounded-3xl">
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li className="text-primary p-3 hover:bg-primary hover:text-surface rounded-3xl">
            <a href="#especialidades" onClick={closeMenu}>
              Especialidades
            </a>
          </li>
          <li className="text-primary p-3 hover:bg-primary hover:text-surface rounded-3xl">
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li className="text-primary p-3 hover:bg-primary hover:text-surface rounded-3xl">
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>
          </li>
          <li className="text-primary p-3 hover:bg-primary hover:text-surface rounded-3xl">
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>

          <Button className="mt-2">Agendar</Button>
        </ul>
      )}
    </header>
  );
}

export default Header;
