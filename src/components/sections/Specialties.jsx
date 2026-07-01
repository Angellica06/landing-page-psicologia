import Container from "../Container";
import SpecialtyCard from "../SpecialtyCard";
import Cerebro from "../../assets/cerebro.png";
import Emocional from "../../assets/emocional.png";
import Autoestima from "../../assets/autoestima.png";
import Bateria from "../../assets/bateria.png";
import Autoconhecimento from "../../assets/autoconhecimento.png";

const especialidades = [
  {
    id: 1,
    nome: "Ansiedade",
    descricao: "Controle de pensamentos acelerados e preocupações.",
    imagem: Cerebro,
  },
  {
    id: 2,
    nome: "Inteligência Emocional",
    descricao: "Gestão das emoções e melhoria de relações.",
    imagem: Emocional,
  },
  {
    id: 3,
    nome: "Autoestima",
    descricao: "Fortalecimento da autoconfiança.",
    imagem: Autoestima,
  },
  {
    id: 4,
    nome: "Estresse e Burnout",
    descricao: "Redução do esgotamento físico e mental.",
    imagem: Bateria,
  },
  {
    id: 5,
    nome: "Autoconhecimento",
    descricao: "Compreensão de si mesmo(a) e seus padrões.",
    imagem: Autoconhecimento,
  },
];

function Specialties() {
  return (
    <section id="especialidades" className="py-10 md:py-14">
      <Container>
        <div className="text-center">
          <p className="text-md text-text-muted tracking-widest">
            ESPECIALIDADES
          </p>
          <h1 className="text-2xl font-playfair">
            Um cuidado psicológico voltado para suas necessidades
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-14">
          {especialidades.map((especialidade) => (
            <SpecialtyCard
              key={especialidade.id}
              nome={especialidade.nome}
              descricao={especialidade.descricao}
              imagem={especialidade.imagem}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Specialties;
