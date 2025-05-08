import styled from "styled-components";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";

const PostCon = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`

const EmptyAlert = styled.p`
    fontSize: '24px';
    color: '#888888';
`


function PostList(props){

    const{posts, itemClicked} = props;

    const fromNewPosts = [...posts].sort((a, b) => b.id - a.id);

    if (!posts || posts.length === 0) {
        return (
          <div style={{ width: '100%', textAlign: 'center', padding: '48px 0' }}>
            <img
              src={import.meta.env.BASE_URL + 'empty.png'}
              style={{ width: '600px', marginBottom: '16px' }}
            />
            <EmptyAlert>
                카테고리에 게시글이 없습니다.
            </EmptyAlert>
          </div>
        );
      }

    const list = fromNewPosts.map((post, index) =>{
        return <PostItem key={post.id} post={post} onClick={(e)=> itemClicked(post)}></PostItem>
    })

    return(
        <PostCon>
            {list}
        </PostCon>
    )

}

export default PostList