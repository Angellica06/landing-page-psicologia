import Container from "../Container";
import Button from "../Button";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contato" className="py-10 md:py-12 px-8">
      <Container className="contato flex flex-col justify-center items-center gap-6 rounded-4xl py-12">
        <div className="text-center">
          <p className="text-md text-surface tracking-widest">CONTATO</p>
          <h1 className="text-4xl text-primary-darker font-playfair">
            Vamos conversar?
          </h1>
          <p className="text-surface">
            Agende sua sessão inicial e dê o primeiro passo no seu processo de
            cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mt-6 sm:px-8 lg:px-20">
          <div className="flex flex-col gap-4 text-center text-primary bg-surface p-6 border border-secondary rounded-xl hover:border hover:border-accent">
            <BsTelephone className="mx-auto text-2xl" />
            <p className="tracking-widest">(00) 00000-0000</p>
          </div>

          <div className="flex flex-col gap-4 text-center text-primary bg-surface py-6 px-8 border border-secondary rounded-xl hover:border hover:border-accent">
            <BsEnvelope className="mx-auto text-2xl" />
            <p className="tracking-widest">contato@draanasilva.com</p>
          </div>

          <div className="flex flex-col gap-4 text-center text-primary bg-surface py-6 px-8 border border-secondary rounded-xl hover:border hover:border-accent">
            <BsGeoAlt className="mx-auto text-2xl" />
            <p className="tracking-widest">Salvador · Online</p>
          </div>
        </div>

        <div className="mt-4">
          <Button className="flex items-center gap-3">
            Agendar conversa <FaWhatsapp className="text-xl" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
