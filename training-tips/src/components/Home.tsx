import fichasDeTreino from '../data';
import DayCard from './DayCard';
import NavBar from './NavBar';
// Revisar as imagens quebradas.
// Estilização da barra de navegação e da home
// Criação de uma página sobre o projeto.
// Criação de uma página sobre o autor.
function Home() {
  return (
    <section>
      <NavBar />
      {fichasDeTreino.map((day, index) => (
        <DayCard key={ index } day={ day } />
      ))}
    </section>
  );
}

export default Home;
