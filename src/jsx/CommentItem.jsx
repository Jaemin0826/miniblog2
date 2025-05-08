import styled from 'styled-components'
import Profile from './Profile'

const StyledWrapper = styled.div`
    border-bottom: 1px solid #d9d9d9;
    padding: 12px;
`

const StyledContent = styled.p`
    font-size: 16px;
    padding: 4px 36px;
    color: #666666;
`

const ConB = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 8px;
`

const StyledDate = styled.p`
    font-size: 16px;
    color: #888888;
`

function CommentItem(props){
    const {comment} = props

    let timestamp = new Date().getTime().toString()
    const now = new Date();

    const formattedTime = comment.time;

    return (
        <StyledWrapper>
           <ConB>
                <Profile name='익명의 비둘기'></Profile>
                <StyledDate>{formattedTime}</StyledDate>
            </ConB>
            <StyledContent>{comment.content}</StyledContent>
        </StyledWrapper>
    )
}

export default CommentItem

