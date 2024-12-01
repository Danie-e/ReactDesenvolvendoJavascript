import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecondaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecondaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecondaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecondaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecondaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecondaria: '#FFBA05'
    },
    {
      nome: ' Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecondaria: '#FF8A29'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
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
              nome={time.nome}
              corPrimaria={time.corPrimaria}
              corSecondaria={time.corSecondaria}
              colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
            />
        )}
      <Rodape />
    </div>
  );
}

export default App;