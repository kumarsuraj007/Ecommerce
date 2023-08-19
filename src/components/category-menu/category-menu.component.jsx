import DirectoryItem from "../directory/directory-item.component.jsx";
import "./category-menu.styles.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
