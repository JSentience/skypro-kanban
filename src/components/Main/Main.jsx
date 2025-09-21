import './Main.css';
import Column from '../Column/Column';

const Main = () => {
  const columns = [
    {
      title: 'Без статуса',
      cards: [
        {
          theme: { class: '_orange', text: 'Web Design' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_orange', text: 'Web Design' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_purple', text: 'Copywriting' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_orange', text: 'Web Design' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
    {
      title: 'Нужно сделать',
      cards: [
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
    {
      title: 'В работе',
      cards: [
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_purple', text: 'Copywriting' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
        {
          theme: { class: '_orange', text: 'Web Design' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
    {
      title: 'Тестирование',
      cards: [
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
    {
      title: 'Готово',
      cards: [
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
    {
      title: 'Нужно сделать',
      cards: [
        {
          theme: { class: '_green', text: 'Research' },
          title: 'Название задачи',
          date: '30.10.23',
          btnHref: '#popBrowse',
        },
      ],
    },
  ];

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {columns.map((column, index) => (
                <Column key={index} title={column.title} cards={column.cards} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
