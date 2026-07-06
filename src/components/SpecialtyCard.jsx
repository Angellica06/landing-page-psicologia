function SpecialtyCard({ nome, descricao, imagem }) {
  return (
    <div className="card flex flex-col justify-center gap-1 bg-background-alt border border-primary-light text-center rounded-lg min-h-54 py-6 px-4">
      <img loading="lazy" className="mx-auto w-20 mb-2" src={imagem} alt={nome} />
      <h3 className="text-lg text-primary-dark font-medium">{nome}</h3>
      <p className="text-primary text-sm">{descricao}</p>
    </div>
  );
}

export default SpecialtyCard;
