// UploadImage.jsx
import styled from "styled-components";
import { useRef } from "react";

const StyledWrapper = styled.div``;

const StyledTitle = styled.h1`
  font-size: 16px;
  color: #444444;
  margin-bottom: 12px;
`;

const UploadButton = styled.div`
background-color: #f8f8f8;
display: flex;
padding: 12px;
gap: 4px;
cursor: pointer;
width: fit-content;
border-radius: 2px;
border: 0.5px solid #d9d9d9;
`;

const Styledimg = styled.img`
  width: 300px;
  margin-top: 12px;
  border-radius: 8px;
  cursor: pointer;

    &:hover {
    animation: shake 0.5s ease-in-out;
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        20% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }
`;

function UploadImage({ image, setImage }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (_e) => {
      setImage(_e.target.result);
    };
  };

  const handleRemoveImage = () => {
    if (window.confirm("이미지를 삭제할까요?")) {
      setImage(null);
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>이미지 업로드</StyledTitle>
      <UploadButton onClick={handleClick}>
        <i className="fa-regular fa-image"></i> 여기를 눌러 첨부할 파일을 선택해주세요.
      </UploadButton>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {image && <Styledimg src={image} alt="미리보기" onClick={handleRemoveImage} />}
    </StyledWrapper>
  );
}

export default UploadImage;
