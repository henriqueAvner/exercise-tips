import { Link, useNavigate, useParams } from 'react-router-dom';
import fichasDeTreino from '../data';
import NavBar from './NavBar';

function TrainingDay() {
  const params: any = useParams();
  const navigate = useNavigate();
  const currTraining = fichasDeTreino
    .find((day) => day.grupoMuscular === params.training_day);
  function HandleHome() {
    navigate('/Home');
  }

  if (!currTraining) {
    return (
      <div>
        <h1>Oops! Não encontramos este treino / exercicio em nossos dados.</h1>
        <h2>
          Acesse a
          {' '}
          <Link to="/Home">Lista de treinos</Link>
          {' '}
          e selecione um de nossos dias!!
        </h2>
      </div>
    );
  }
  return (
    <main>
      <NavBar />
      <h1>
        {currTraining?.grupoMuscular}
      </h1>
      <section>
        {currTraining?.exercicios.map((exercicio, index) => (
          <div key={ index }>
            <h2>{exercicio.nome}</h2>
            <img src={ exercicio.img } alt={ exercicio.nome } />
            <p>{exercicio.descricao}</p>
            <p>
              Séries:
              {exercicio.series}
            </p>
            <p>
              Repetições:
              {exercicio.repeticoes}
            </p>
          </div>
        ))}
      </section>
      <button onClick={ HandleHome }>Voltar</button>

    </main>
  );
}

export default TrainingDay;
