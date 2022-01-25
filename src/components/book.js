import "./book.css";
const books = ({ title, color }) => {
  return (
    <section class={`book--container ${color}`}>
      <h2>{title}</h2>
      <p> by JC Smiley </p>
    </section>
  );
};

export default books;
