function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-primary text-white py-3 px-6 rounded-3xl ${className} hover:bg-[#56684c] cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
