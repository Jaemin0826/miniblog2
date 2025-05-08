import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 16px;
    border-radius: 2px;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
    background-color:#f3f3f3;
    }
`

const ConA = styled.span`
    display: flex;
    gap: 12px;
    align-items: center;
`

const StyledCategory = styled.span`
    width: 80px;
    display:flex;
    
    & > p{
        font-size: 14px;
        padding: 4px 6px;
        background-color: #eeeeee;
    }
`

const StyledTitle = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: #222222;
    width: 240px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StyledDate = styled.span`
    font-size: 16px;
    color: #888888;
`

function PrePostItem(props){
    // post: 글 데이터, onClick: 클릭했을 때
    const {post, onClick,} = props

    if (!post || !post.title) { 
        return null; // 렌더링하지 않음
    }

    return (
        <StyledWrapper onClick={onClick}>
            <ConA>
                <StyledCategory><p>{post.category}</p></StyledCategory>
                <StyledTitle>{post.title}</StyledTitle>
            </ConA>
            <StyledDate>{post.date}</StyledDate>
        </StyledWrapper>
    )
}

export default PrePostItem
