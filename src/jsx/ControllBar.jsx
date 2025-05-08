import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LeftBarBox = styled.div`
    padding: 72px 24px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    border-right: 1px solid #d9d9d9;
    height: 100%;
    background-color: #fff;
    align-items: center;
`

const StyledImg = styled.img`
    transition : transform 0.1s ease;
    width: 36px;

    &:hover{
    transform: scale(1.2);
    }
`

function ControllBar() {

    const navigate = useNavigate();

    return (
        <LeftBarBox>
            <StyledImg src="/Logo.svg" onClick={(post)=>{navigate("/")}} />
            <StyledImg src="/Home.svg" onClick={(post)=>{navigate("/")}}  />
            <StyledImg src="/Add.svg" onClick={(post)=>{navigate("/write")}}  />
        </LeftBarBox>
    );
}

export default ControllBar;
