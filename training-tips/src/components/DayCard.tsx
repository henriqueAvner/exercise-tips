import { useState } from 'react';
import { Link } from 'react-router-dom';

function DayCard({ day }: any) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <h1>{day.grupoMuscular}</h1>
      <button onClick={ () => setShowDetails(!showDetails) }>
        {showDetails ? 'Ocultar detalhes' : 'Mostrar detalhes'}
      </button>
      {showDetails && (
        <div>
          {day.exercicios.map((exercicio: any) => {
            return (
              <h2 key={ exercicio.nome }>{exercicio.nome}</h2>
            );
          })}
          <Link to={ `/home/${day.grupoMuscular}` }>
            <button>Detalhes do dia</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DayCard;
