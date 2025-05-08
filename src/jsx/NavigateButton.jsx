import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding-top:36px;
`

const StyledButton = styled.div`
padding: 12px 24px;
border-radius: 4px;
width: 200px;
color: #fff;
background-color: #ffffff;
border: 0.5px solid #d9d9d9;
cursor: pointer;

&:hover{
  background-color: #eeeeee;
}

& > p{
  font-size: 14px;
  color: #888888;
  margin-bottom: 4px;
}

& > h1{
  font-size: 15px;
  color: #444444;
  font-weight: 500;

  white-space: nowrap;     
  overflow: hidden;          
  text-overflow: ellipsis; 
}
`

function NavigateButton({ currentPost, allPosts }) {
    const [currentIndex, setCurrentIndex] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const index = allPosts.findIndex((p) => p.id === currentPost.id);
      setCurrentIndex(index);
    }, [currentPost, allPosts,]);
  
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  
    return (
      <StyledWrapper>
        <StyledButton onClick={() => prevPost && navigate(`/post/${prevPost.id}`)}>
          <p>이전글 보기</p>
          <h1>{prevPost ? prevPost.title : '이전 글이 없습니다.'}</h1>
        </StyledButton>
  
        <StyledButton onClick={() => nextPost && navigate(`/post/${nextPost.id}`)}>
          <p>다음글 보기</p>
          <h1>{nextPost ? nextPost.title : '다음 글이 없습니다.'}</h1>
        </StyledButton>
      </StyledWrapper>
    );
  }
  
  export default NavigateButton;
  