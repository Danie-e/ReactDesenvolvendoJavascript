import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      nome: ' Inovação e Gestão',
      cor: '#FF8A29'
    }
  ]
  )
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Deletando colaborador.');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {
        times.map(
          time =>
            <Time
              key={time.nome}
              time={time}
              colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
              aoDeletar={deletarColaborador}
              mudarCor={mudarCorDoTime}
            />
        )}
      <Rodape />
    </div>
  );
}

export default App;