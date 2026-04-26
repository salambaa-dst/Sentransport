import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const lignePlusLongue = lignes.reduce(
    (max, l) => (l.arrets > max.arrets ? l : max),
    lignes[0]
  );

  return (
    <div className="stat-reseau">
      <div className="stat-reseau-carte">
        <span className="stat-reseau-nombre">{totalLignes}</span>
        <span className="stat-reseau-label">Lignes</span>
      </div>
      <div className="stat-reseau-carte">
        <span className="stat-reseau-nombre">{totalArrets}</span>
        <span className="stat-reseau-label">Arrêts au total</span>
      </div>
      <div className="stat-reseau-carte">
        <span className="stat-reseau-nombre">Ligne {lignePlusLongue.numero}</span>
        <span className="stat-reseau-label">
          Plus longue ({lignePlusLongue.arrets} arrêts)
        </span>
      </div>
    </div>
  );
}

export default StatReseau;
