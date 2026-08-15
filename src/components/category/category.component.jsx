export const Category = ({ item }) => {
  const { title } = item;
  return (
    <div className='category-container'>
      {/* <img /> */}
      <div className='category-body-container '>
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};
