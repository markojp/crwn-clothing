import './directory.styles.scss';
import { CategoryItem } from '../category-item/category-item.component';

export const Directory = ({ categories }) => {
  const categoryElements = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });

  return <div className='directory-container'>{categoryElements}</div>;
};
