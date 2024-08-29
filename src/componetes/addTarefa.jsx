import React, { useState } from 'react';

const addTarefa = (addnovaTarefa) => {
  const [novaTarefa, setNovaTarefa] = useState('');

  const addTarefa = () => {
    addnovaTarefa(novaTarefa);
    setNovaTarefa('');
  };

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTarefa}>Adicionar Tarefa</button>
    </div>
  );
};

export default addTarefa;