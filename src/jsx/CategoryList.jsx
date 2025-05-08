import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledWrapper = styled.div`
    width: 100%;
    padding: 12px 12px;

    display: flex;
    align-items: center;
    justify-contents: flex-start;
    gap: 8px;

    border: 1px solid #d9d9d9;
    border-radius: 2px;
`

function CategoryList({ selectedCategory, setSelectedCategory, posts }) {
  const categoryName = ["전체", "일상 공유", "정보 공유", "메모장", "편지"];

  const getCount = (category) => {
    if (category === "전체") return posts.length;
    return posts.filter((post) => post.category === category).length;
  };

  return (
    <StyledWrapper>
      {categoryName.map((item) => (
    <CategoryItem
      key={item}
      icon={<i className="fa-regular fa-file-lines"></i>}
      categoryName={item}
      count={getCount(item)}
      selected={selectedCategory === item}
      onClick={() => setSelectedCategory(item)}
      ></CategoryItem>
      ))}
    </StyledWrapper>
  );
}

  

export default CategoryList