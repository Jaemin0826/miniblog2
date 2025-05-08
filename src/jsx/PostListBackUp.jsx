import styled from "styled-components";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import PostItemCard from "./PostItemCard";

const PostCon = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;
`

const GuideWrapper = styled.div`
    width: 1440px;
    background-color: #f8f8f8;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 16px;
    border-radius: 2px;

    border-bottom: 1px solid #d9d9d9;
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
        font-size: 16px;
        padding: 4px 6px;
        color: #888888;
    }
`

const StyledGuide = styled.span`
    font-size: 16px;
    color: #888888;
`


function PostListBackUp(props){

    const{posts, itemClicked} = props;
    const navigate = useNavigate();


    const list = posts.map((post, index) =>{
        return <PostItem key={post.id} post={post} onClick={(e)=> itemClicked(post)}></PostItem>
    })

    return(
        <PostCon>
            <GuideWrapper>
            <ConA>
                <StyledCategory><p>카테고리</p></StyledCategory>
                <StyledGuide>제목</StyledGuide>
            </ConA>
            <StyledGuide>작성 일시</StyledGuide>
            </GuideWrapper>
            {list}
        </PostCon>
    )

}

export default PostListBackUp