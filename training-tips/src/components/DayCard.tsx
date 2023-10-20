import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DayCard({ day }: any) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
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
          <button onClick={ () => navigate('/explicacoes') }>
            Explicações sobre o dia
          </button>
        </div>
      )}
    </div>
  );
}

export default DayCard;
