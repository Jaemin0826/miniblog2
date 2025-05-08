import styled from 'styled-components'

const StyledButton = styled.button`
    width: fit-content; 
    background-color: #222222;
    padding: 8px 16px;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    i {
        font-size: 16px;
    }
`

const DeleteButton = styled(StyledButton)`
    background-color: #FF2E1A;
    border: none;
`

function Button(props){
    const { title, onClick, icon, type } = props;

    const ButtonComponent = type === 'delete' ? DeleteButton : StyledButton;

    return (
        <ButtonComponent onClick={onClick}>
            {icon && <i className={icon}></i>}
            {title || '작성하기'}
        </ButtonComponent>
    );
}

export default Button;
