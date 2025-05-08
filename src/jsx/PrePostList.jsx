import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrePostItem from "./PrePostItem";

const PostCon = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-top: 72px;
   padding: 24px 0px;
`

const GuideWrapper = styled.div`
    width: 100%;
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

const StyledTitle = styled.h1`
    font-size: 20   px;
    color: #444444;
`


function PrePostList(props){

    const{posts, itemClicked} = props;

    const fromNewPosts = [...posts].sort((a, b) => b.id - a.id);

    const list = fromNewPosts.map((post, index) =>{
        return <PrePostItem key={post.id} post={post} onClick={(e)=> itemClicked(post)}></PrePostItem>
    })

    return(
        <PostCon>
            <StyledTitle>
                전체글 목록
            </StyledTitle>
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

export default PrePostList