import { FaStar } from "react-icons/fa";

function TestimonilsCard({ description, name }) {
  return (
    <div className="card flex flex-col gap-5 bg-surface py-6 px-8 border border-secondary rounded-xl">
      <div className="flex gap-1 text-accent text-lg">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="text-primary-darker tracking-widest">"{description}"</p>
      <span className="text-primary-dark font-semibold tracking-widest">{name}</span>
    </div>
  );
}

export default TestimonilsCard;
