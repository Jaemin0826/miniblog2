import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`

const StyledTitle = styled.h1`
    font-size: 16px;
    color: #444444;
`

const StyledTextArea = styled.textarea`
    background-color: #fff;
    width: 100%;
    height: ${props=>props.height}px;
    line-height: 1.5;
    font-size: ${props=>props.size}px;
    outline: none;
    resize: none;
    border: 0.5px solid #d9d9d9;
    padding: 12px;
    font-weight: ${props=>props.weight};
    color: #444444;
    overflow: scroll-Y;

    &::placeholder {
        color: #999999;
        font-size: ${props=>props.placeholderSize}px; /* 필요하면 사이즈 다르게 */
        font-weight: 500;
    }
`

function TextInput(props){
    // height: 높이, value & onChange: 제어 컴포넌트용
    const {placeholder, height, weight, value, onChange, size, title, placeholderSize} = props

    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledTextArea weight={weight} placeholder={placeholder} placeholderSize={placeholderSize || 20} 
            size={size || 20} height={height || 20} value={value} onChange={onChange}></StyledTextArea>
        </StyledWrapper>
    )
}

export default TextInput

