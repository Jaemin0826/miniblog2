import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`

const NoComment = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;

    font-size: 16px;
    color: #d9d9d9;
    font-weight: 400;
`

function CommentList(props){
    const{comments} = props

    const list = comments.map((comment, index)=> {
        return<CommentItem key={comment.id} comment={comment}></CommentItem>
    })

    if (!comments || comments.length === 0) {
        return (
            <StyledWrapper>
                <NoComment>댓글이 없습니다. 댓글을 입력해 주세요.</NoComment>
            </StyledWrapper>
        );
    }

    return(
        <StyledWrapper>
            {list}
        </StyledWrapper>
    )
}

export default CommentList