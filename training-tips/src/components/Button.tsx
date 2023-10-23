import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home/peito');
  }

  return (
    <button onClick={ handleClick }>Detalhes do dia</button>
  );
}
export default Button;
