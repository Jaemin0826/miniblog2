import styled from 'styled-components'
import Profile from './Profile'

const StyledWrapper = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;

    cursor: pointer;
    background-color: #f8f8f8;
    border-radius: 2px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    flex-grow: 1;
    white-space: pre-line;

    & > h1{
        font-size: 20px;
        color: #222222;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

     & > p {
    color: #888888;
    font-size: 16px;
    font-weight: 400;
    display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

`

const InfoWrapper = styled.div`
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 0.5px solid #f3f3f3;
`

const StyledImage = styled.img`
    width: 100%;
`

const ImgCon = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: #fff;
`

const CommentInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

const HashtagBox = styled.span`
    padding: 4px 8px;
    background-color: #eeeeee;
    color: #666666;
    width: fit-content;
    gap:2px;
    font-weight:600;
    font-size: 14px;
`

const HashtagCon= styled.div`
    display: flex;
    gap: 6px;
    flex-Wrap: wrap;
    max-height: 60px;
    overflow-y: hidden;
`

function PostItemCard(props){
    const {post, onClick,} = props;

    if (!post || !post.title) { 
        return null; // 렌더링하지 않음
      };

    return(
        <StyledWrapper onClick={onClick}>
            {post.image &&<ImgCon> <StyledImage src={post.image} alt="업로드된 이미지" /></ImgCon>}
        
            <TextWrapper noImage={!post.image}>
                <HashtagCon>
                    {post.hashtag && post.hashtag.map((tag, index) => (<HashtagBox key={index}>#{tag}</HashtagBox>))}
                </HashtagCon>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </TextWrapper>
            <InfoWrapper>
                <CommentInfo>
                    <i className="fa-solid fa-comment"></i>
                    <span style={{ color: '#222222',}}>{post.comments.length}</span>
                </CommentInfo>
                {post.date}
            </InfoWrapper>
        </StyledWrapper>
    )
}

export default PostItemCard