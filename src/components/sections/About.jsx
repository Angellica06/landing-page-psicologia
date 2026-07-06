import Container from "../Container";
import Sobre from "../../assets/sobre.png";
import { BsCheck2Circle } from "react-icons/bs";

function About() {
  return (
    <section id="sobre" className="py-10 md:py-12 px-8">
      <Container className="sobre grid grid-cols-1 lg:grid-cols-[35%_55%] gap-6 justify-center items-center bg-[#F4F4EF] rounded-3xl px-10 lg:px-28 py-12">
        <div className="mx-auto lg:mx-0 py-4">
          <img loading="lazy" src={Sobre} alt="Foto da psicóloga Dra. Ana Silva" />
        </div>

        <div className="flex flex-col gap-6 text-start">
          <div>
            <p className="text-md text-text-muted tracking-widest">SOBRE MIM</p>
            <h1 className="text-2xl font-playfair">
              Prazer, eu sou Dra. Ana Silva
            </h1>
          </div>

          <div>
            <p className="text-primary">
              Acredito que todos nós temos recursos internos para lidar com os
              desafios da vida. Meu papel é ajudar você a encontrá-los e
              desenvolvê-los de forma mais consciente e saudável.
            </p>
            <p className="text-primary">
              Em um ambiente acolhedor e livre de julgamentos, trabalharemos
              juntos para compreender suas emoções, fortalecer sua autoestima e
              construir caminhos que promovam mais equilíbrio, bem-estar e
              qualidade de vida.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm">
              <BsCheck2Circle className="text-primary text-2xl" />
              Atendimento online e presencial
            </div>
            <div className="flex items-center gap-3 text-sm">
              <BsCheck2Circle className="text-primary text-2xl" />
              Abordagem cognitivo-comportamental
            </div>
            <div className="flex items-center gap-3 text-sm">
              <BsCheck2Circle className="text-primary text-2xl" />
              +12 anos de experiência
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
