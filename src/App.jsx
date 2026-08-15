import { Category } from './components/category/category.component';

const App = () => {
  const categories = [
    { id: 1, title: 'hats' },
    { id: 2, title: 'jackets' },
    { id: 3, title: 'sneakers' },
    { id: 4, title: 'womens' },
    { id: 5, title: 'mens' },
  ];

  const categoryElements = categories.map((category) => {
    return <Category key={category.id} item={category} />;
  });

  return <div className='categories-container'>{categoryElements}</div>;
};

export default App;
