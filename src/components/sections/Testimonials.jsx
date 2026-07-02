import Container from "../Container";
import TestimonilsCard from "../TestimonilsCard";

const testimonials = [
  {
    id: 1,
    description:
      "Excelente atendimento e profissional muito atenciosa. Me senti segura durante toda a consulta.",
    name: "Mariana Santos",
  },
  {
    id: 2,
    description:
      "Profissional extremamente competente e acolhedora. Cada sessão tem sido muito importante para o meu desenvolvimento.",
    name: "João Pedro",
  },
  {
    id: 3,
    description:
      "Acolhimento incrível e uma profissional muito dedicada. Saí da consulta me sentindo mais leve e confiante.",
    name: "Carla Silva",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="depoimentos bg-[#FAF8F4] py-10 md:py-12">
      <Container className="flex flex-col gap-4">
        <div className="text-center">
          <p className="text-md text-text-muted tracking-widest">DEPOIMENTOS</p>
          <h1 className="text-2xl font-playfair">
            Experiências que transformam vidas
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial) => (
            <TestimonilsCard
              key={testimonial.id}
              description={testimonial.description}
              name={testimonial.name}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
