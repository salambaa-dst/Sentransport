import './Statistique.css';

function Statistique({ nombre, label }) {
  return (
    <div className="statistique">
      <span className="statistique-nombre">{nombre}</span>
      <span className="statistique-label">{label}</span>
    </div>
  );
}

export default Statistique;
