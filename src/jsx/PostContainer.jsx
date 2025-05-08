import styled from 'styled-components'
import Profile from './Profile'
import Button from './Button'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`
const TodayDate = styled.p`
    font-size: 16px;
    color: #888888;
`
const StyledTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    color: #222222;    
`

const StyledContent = styled.p`
    white-space: pre-line;
    font-size: 18px;
    line-height: 1.5;
`

const StyledImage = styled.img`
    margin-top: 20px;
    max-width: 400px;
    border-radius: 8px;
`

const ConA = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
`

const ConB = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
`

const ConC = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 12px;
`

const StyledDate = styled.p`
    font-size: 16px;
    color: #888888;
`

const HashtagCon= styled.div`
    display: flex;
    gap: 8px;
    flexWrap: wrap;
    padding: 72px 0px 0px 0px;
`

const HashtagBox = styled.span`
    padding: 6px 12px;
    background-color: #eeeeee;
    border-radius: 8px;
    color: #444444;
    width: fit-content;
    gap: 8px;
    font-weight:600;
    font-size: 16px;
`

function PostContainer(props){
    // post: 글 데이터
    const {post, handleDelete} = props

    const today = new Date()
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

    return (
        <StyledWrapper>
            <div>
                <ConA>
                    <TodayDate>{post.category}</TodayDate>
                    <StyledTitle>{post.title}</StyledTitle>
                </ConA>
                <ConB>
                    <ConC>
                        <Profile name='박줴민'></Profile>
                        <StyledDate>{post.date}</StyledDate>
                    </ConC>
                    <Button type='delete' title="삭제" icon="fa-solid fa-trash" onClick={handleDelete}></Button>
                </ConB>
            </div>
            {post.image && <StyledImage src={post.image} alt="업로드된 이미지" />}
            <StyledContent>{post.content}</StyledContent>
            <HashtagCon>
                    {post.hashtag && post.hashtag.map((tag, index) => (<HashtagBox key={index}>#{tag}</HashtagBox>))}
                </HashtagCon>
        </StyledWrapper>
    )
}

export default PostContainer

