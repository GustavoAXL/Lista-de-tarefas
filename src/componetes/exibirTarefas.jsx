import React from 'react';

const exibirTarefa = ({ tarefas }) => {
  return (
    <ul>
      {tarefas.map((tarefas, index) => (
        <li key={index}>{tarefas}</li>
      ))}
    </ul>
  );
};

export default exibirTarefa;