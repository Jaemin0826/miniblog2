import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Icon = styled.div`
    width: 28px;
    height:28px;    
    border-radius: 24px;
    background-image: url(${import.meta.env.BASE_URL + "Icon.png"});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const StyledName = styled.p`
    font-size: 16px;
    color: #444444;
    font-weight: 600;
`

function Profile(props){

    const{name} = props;

    return(
        <StyledWrapper>
            <Icon></Icon>
            <StyledName>{name}</StyledName>
        </StyledWrapper>
    )
}

export default Profile