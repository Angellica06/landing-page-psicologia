import Container from "../Container";
import Button from "../Button";
import Psicologa from "../../assets/psicologa.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero pt-10 md:pt-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 mt-14">
        <div className="space-y-4 pt-20">
          <p className="text-sm text-[#AF8A53] tracking-widest">
            PSICOLOGIA CLÍNICA · CRP 06/000000
          </p>
          <h1 className="text-5xl md:text-6xl max-w-2xl leading-tight text-primary font-playfair">
            Psicoterapia para uma vida mais leve e com significado.
          </h1>
          <p className="max-w-xl text-lg text-[#4C4C4C]">
            Um espaço seguro para você se compreender superar desafios e
            construir o bem-estar que merece ter.
          </p>
          <Button className="flex items-center gap-3">
            Agendar conversa <FaWhatsapp className="text-xl" />
          </Button>
        </div>

        <div className="mt-6">
          <img src={Psicologa} alt="Retrato ilustrativo de uma psicóloga" />
        </div>
      </Container>
    </section>
  );
}
