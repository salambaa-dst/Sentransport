import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import StatReseau from './StatReseau';
import Footer from './Footer';

function App() {
  // Exercice 3 : 4 lignes supplémentaires avec quartiers réels de Dakar
  const lignes = [
    { id: 1,  numero: "1",  depart: "Parcelles Assainies", arrivee: "Plateau",     arrets: 14, couleur: "#0a6e31" },
    { id: 2,  numero: "7",  depart: "Guediawaye",          arrivee: "Place Obé",   arrets: 18, couleur: "#1565c0" },
    { id: 3,  numero: "15", depart: "Pikine",              arrivee: "Médina",      arrets: 12, couleur: "#c62828" },
    { id: 4,  numero: "23", depart: "Ouakam",              arrivee: "Grand Dakar", arrets: 10, couleur: "#6a1b9a" },
    { id: 5,  numero: "8",  depart: "Almadies",            arrivee: "Colobane",    arrets: 16, couleur: "#e65100" },
    { id: 6,  numero: "12", depart: "Yoff",                arrivee: "Sandaga",     arrets: 11, couleur: "#00695c" },
    { id: 7,  numero: "3",  depart: "Fann",                arrivee: "HLM",         arrets: 9,  couleur: "#558b2f" },
    { id: 8,  numero: "19", depart: "Liberté 6",           arrivee: "Dieuppeul",   arrets: 13, couleur: "#37474f" },
    { id: 9,  numero: "5",  depart: "Sicap Mbao",          arrivee: "Médina",      arrets: 15, couleur: "#ad1457" },
    { id: 10, numero: "27", depart: "HLM Grand Yoff",      arrivee: "Plateau",     arrets: 20, couleur: "#0277bd" },
  ];

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        {/* Exercice 2 : Statistiques du réseau */}
        <StatReseau lignes={lignes} />
        <ListeLignes lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
