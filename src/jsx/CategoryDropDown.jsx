import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const DropDownWrapper = styled.select`
    width: 220px;
    padding: 12px;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledTitle = styled.h1`
    font-size: 16px;
    color: #444444;
    margin-bottom: 12px;
`

function CategoryDropDown(props){

    const {value, onChange} = props;

    return(
        <StyledWrapper>
            <StyledTitle>카테고리</StyledTitle>
            <DropDownWrapper value={value} onChange={onChange}>
                <option value="일상 공유">일상 공유</option>
                <option value="정보 공유">정보 공유</option>
                <option value="메모장">메모장</option>
                <option value="편지">편지</option>
            </DropDownWrapper>
        </StyledWrapper>
    )
}

export default CategoryDropDown