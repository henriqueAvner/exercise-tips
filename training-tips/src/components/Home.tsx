import fichasDeTreino from '../data';
import DayCard from './DayCard';
// Ao clicar no botão de "ver exercício do dia", você é redirecionado para uma página
// daquele dia, onde mostra detalhes sobre cada um deles.
function Home() {
  return (
    <section>
      {fichasDeTreino.map((day, index) => (
        <DayCard key={ index } day={ day } />
      ))}
    </section>
  );
}

export default Home;
