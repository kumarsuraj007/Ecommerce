import {DirectoryContainer, BackgroundImage, Body} from "./directory-item-styles.jsx";
import {useNavigate} from 'react-router-dom'

const DirectoryItem = ({category}) => {
  const { imageUrl, title, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
