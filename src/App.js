import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p className="welcome">
          Bienvenue ! Cette application vous aide à trouver
          votre ligne de bus à Dakar.
        </p>

        <section className="stats-section">
          <h2 className="stats-titre">Le réseau DDD en chiffres</h2>
          <div className="stats-grid">
            <Statistique nombre="10" label="Lignes" />
            <Statistique nombre="150" label="Arrêts" />
            <Statistique nombre="3" label="Zones" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
