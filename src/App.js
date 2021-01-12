import { useState, useEffect } from 'react';
import Board from 'react-trello';
import classes from './style.module.scss';

const initial = {
  lanes: [
    {
      id: 'lane1',
      title: 'To do',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          label: '5 mins',
          metadata: { sha: 'be312a1' },
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Completed',
      cards: [],
    },
  ],
};

function App() {
  const [data, setData] = useState(
    localStorage.getItem('scrum')
      ? JSON.parse(localStorage.getItem('scrum'))
      : initial
  );

  useEffect(() => {
    if (
      data &&
      JSON.stringify(data) !== JSON.parse(localStorage.getItem('scrum'))
    ) {
      localStorage.setItem('scrum', JSON.stringify(data));
    }
  }, [data]);

  return (
    <section className="App">
      <header className={classes.header}>
        <h1>Scrum Board</h1>
      </header>
      <Board
        data={data}
        draggable
        editable
        className={classes.main}
        onDataChange={(newData) => setData({ ...newData })}
        canAddLanes
        laneStyle={{ margin: '0 2rem' }}
      />
    </section>
  );
}

export default App;
