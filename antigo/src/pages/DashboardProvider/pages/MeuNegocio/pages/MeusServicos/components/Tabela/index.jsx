import React from 'react';
import MaterialTable from 'material-table';

import Servico1 from './../../../../../../../../assets/images/servico1.jpg';
import Servico2 from './../../../../../../../../assets/images/servico2.jpg';
import Servico3 from './../../../../../../../../assets/images/servico3.jpg';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'nome' },
      { title: 'Valor', field: 'valor', type: 'numeric' },
      { title: 'Descrição', field: 'descricao' },
      { title: 'Grupos', field: 'tags' },
    ],
    data: [
        { 
          nome: 'Dentista', 
          valor: 59 , 
          descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
          tags: 'tag1, tag2, tag3'
        },
        { 
            nome: 'Corte de Cabelo', 
            valor: 11 , 
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            tags: 'tag1, tag2, tag3'
        },
        { 
            nome: 'Fotografia', 
            valor: 27 , 
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            tags: 'tag1, tag2, tag3'
          },
    ],
  });

  return (
    <MaterialTable
      title="Meus Serviços"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
