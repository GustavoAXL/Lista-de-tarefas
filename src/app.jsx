import React, { useState } from 'react';
import addTarefa from './componentes/addTarefa';
import exibirTarefa from './componentes/exibirTarefa';
import tarefaCompleta from './componentes/tarefaCompleta';
import removerTarefa from './componentes/removerTarefa';

const App = () => {
  const [tarefas, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const addTarefa = (novaTarefa) => {
    setTarefa([...tarefas, { text: novaTarefa, completed: false, id: tarefas.length + 1 }]);
    setNovaTarefa('');
  };

  const tarefaCompleta = (idTarefa) => {
    setTarefa(
      tarefas.map((tarefas) => {
        if (tarefas.id === tarefasId) {
          return { ...tarefas, completed: true };
        }
        return tarefas;
      })
    );
  };

  const removerTarefa = (idTarefa) => {
    setTarefa(tarefas.filter((tarefas) => tarefas.id !== tarefasId));
  };

  return (
    <div>
      <TodoInput
        addnovaTarefa={novaTarefa}
        addTarefa={addTarefa}
      />
      <TodoList tarefas={tarefas} />
    </div>
  );
};

export default App;