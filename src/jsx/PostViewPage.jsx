import styled from "styled-components";
import ControllBar from "./ControllBar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import PostContainer from "./PostContainer";
import TextInput from "./TextInput";
import Button from './Button.jsx'
import CommentList from "./CommentList.jsx";
import NavigateButton from "./NavigateButton.jsx";
import Banner from "./Banner.jsx";
import PrePostList from "./PrePostList.jsx";

const Con = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`

const Left = styled.div`
    height: 100vh;
    position: fixed;
`

const Right = styled.div`
    flex-grow: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    padding-left: 72px;
    flex-direction: column;
    align-items: center;
`

const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding-top: 24px;

    border-top: 1px solid #d9d9d9;
`

const PostWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 72px 0px 172px 0px;
    gap: 24px;
`

const CommentCon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const CommentCount = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #444444;
    width: 100%;
    text-align: left;
`

function PostViewPage(){

    const navigate = useNavigate();
    const postId = useParams().id
    const [allPosts, setAllPosts] = useState([]);

useEffect(() => {
  db.collection("post").get().then((qs) => {
    let temp = [];
    qs.forEach((doc) => {
      temp.push(doc.data());
    });
    setAllPosts(temp);
  });
}, []);
    
    const [post, setPost] =useState({
        id: 0, title: '', content: '', comments: []
    })

    useEffect(()=>{
        db.collection('post').doc(postId).get().then((doc)=>{
            setPost(doc.data())
        })
    },[postId])

    const [comment, setComment] = useState('')

    const writeComment = ()=>{
        let timestamp = new Date().getTime().toString()
        let now = new Date();
        let formattedTime = now.toLocaleString('ko-KR');

        let tempComments = post.comments
        tempComments.push({
            id: `${postId}_${timestamp}`,
            content: comment,
            time: formattedTime, 
        })

        db.collection('post').doc(postId).update({
            comments: tempComments
        }).then(()=>{
            alert('댓글이 등록되었습니다')
            setComment('')
        })
    }
    
    const handleDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            db.collection('post').doc(postId).delete()
                .then(() => {
                alert('게시글이 삭제되었습니다.');
                navigate('/');
            })}
        };

    return(
        <Con>
            <Left>
                <ControllBar></ControllBar>
            </Left>
            <Right>
                <Banner img={post.image}></Banner>
                <PostWrapper>
                    <PostContainer handleDelete={handleDelete} post={post}></PostContainer>
                    <CommentCon>
                        <NavigateButton currentPost={post} allPosts={allPosts}></NavigateButton>
                        <CommentBox>
                            <CommentCount>댓글 <span style={{ color: '#FF0051', fontWeight: 'bold' }}>{post.comments.length}</span></CommentCount>
                            <TextInput 
                            placeholderSize='16' placeholder='댓글을 적어주세요.' height="100" 
                            size='16' value={comment} onChange={(e)=>{setComment(e.target.value)}}>
                            </TextInput>
                            <Button title="댓글 작성" onClick={(e)=>writeComment(e.target.value)}></Button>
                        </CommentBox>
                        <CommentList comments = {post.comments}></CommentList>
                    </CommentCon>
                    <PrePostList posts={allPosts}itemClicked={(post) => {window.scrollTo(0, 0);  navigate(`/post/${post.id}`)}}></PrePostList>
                </PostWrapper>
            </Right>
        </Con>
    )
}

export default PostViewPage