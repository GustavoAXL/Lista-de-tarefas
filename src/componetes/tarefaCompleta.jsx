import React from 'react';

const tarefaCompleta = ({ tarefas, Completas }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarefas.completed}
        onChange={() => Completas(tarefas.id)}
      />
      <span>{tarefas.text}</span>
    </li>
  );
};

export default tarefaCompleta;