import styled from "styled-components";

const StyledCategory = styled.div`
  width: fit-content;
  padding: 12px 18px;
  border: 1px solid ${({ selected }) => (selected ? '#FF2E1A' : '#fff')};
  background-color: ${({ selected }) => (selected ? '#fff' : '#f3f3f3')};
  color: ${({ selected }) => (selected ? '#FF2E1A' : '#666666')};
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  display:flex;
  gap: 24px;
  align-items: center;

  i {
    margin-right: 4px;
  }

  &:hover{
    background-color: #eeeeee;
  }

  & > span{
    width:22px;
    height:22px;
    border-radius: 2px;
    background-color: ${({ selected }) => (selected ? '#FF2E1A' : '#d9d9d9')};
    color:${({ selected }) => (selected ? '#fff' : '#666666')};
    text-align: center;
    line-height: 22px;
  }
`

function CategoryItem(props) {

    const {categoryName, icon, selected, onClick, count} = props;

    return (
        <StyledCategory selected={selected} onClick={onClick}>
            <p>{icon}{categoryName}</p>
            <span>{count}</span>
        </StyledCategory>
    )
}

export default CategoryItem