import styled from "styled-components";
import ControllBar from "./ControllBar";
import TextInput from "./TextInput";
import Button from "./Button";
import HashTag from "./HashTag";
import CategoryDropDown from "./CategoryDropdown";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'
import UploadImage from "./UploadImage";
import Banner from "./Banner";

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
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 72px;
    // align-items: center;

    & > img{
        width: 300px; 
    }
`

const WriteCon = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 72px 0px 172px 0px;
    gap: 36px;
`

const HeadCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Styledimg = styled.img`
    width: 300px;
`

function PostWritePage(){

    const navigate = useNavigate()

    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('일상 공유')
    const [hashtags, setHashtags] = useState([]);

    const writePost=()=>{
        let timestamp = new Date().getTime().toString()
        const now = new Date();

        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        db.collection('post').doc(timestamp).set({
            // category: category,
            id: timestamp,
            title: title,
            content: content,
            comments: [],
            image :image,
            category: category,
            date: formattedDate,
            time: formattedTime,
            hashtag: hashtags,
        }).then(()=>{   
            alert('글이 등록되었습니다.')
            navigate('/')
        })
    }

    return(
        <Con>
            <Left>
                <ControllBar></ControllBar>
            </Left>
            <Right>
                <Banner></Banner>
                <WriteCon>
                    <HeadCon>
                        <h1>글작성페이지</h1>
                        <Button onClick={(e)=>{writePost()}}></Button>
                    </HeadCon>
                    <CategoryDropDown value={category} onChange={(e)=>setCategory(e.target.value)}></CategoryDropDown>
                    <TextInput weight='700' placeholder='제목을 적어주세요.' placeholderSize='22' title='제목' 
                    size='22' height='56' value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
                    <TextInput weight='400' placeholder='본문을 적어주세요.' placeholderSize='18' title='본문' 
                    size='18' height='424' value={content} onChange={(e)=>setContent(e.target.value)}></TextInput>
                    <HashTag tags={hashtags} setTags={setHashtags}></HashTag>
                    <UploadImage image={image} setImage={setImage} />
                </WriteCon>
            </Right>
        </Con>
    )
}

export default PostWritePage