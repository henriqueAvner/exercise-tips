import { useState } from 'react';

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
        </div>
      )}
    </div>
  );
}
export default DayCard;
