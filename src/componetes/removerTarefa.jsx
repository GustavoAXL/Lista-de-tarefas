import React from 'react';

const removerTarefa = ({ tarefas, Remover }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarefas.completed}
        onChange={() => Remover(task.id)}
      />
      <span>{tarefas.text}</span>
      <button onClick={() => Remover(tarefas.id)}>Remover</button>
    </li>
  );
};

export default removerTarefa;