import styled from "styled-components";
import { useState } from "react";

const HashCon = styled.div`
`

const StyledTitle = styled.h1`
    font-size: 16px;
    color: #444444;
    margin-bottom: 12px;
`

const HashTagList = styled.div`
    padding: 12px;
    background-color: #f8f8f8;
    display: flex;
    gap: 8px;
    min-height: 50px;
    margin-bottom: 4px;
    border: 0.5px solid #d9d9d9;
`

const Tag = styled.span`
    background-color: #EEEEEE;
    color: #444444;
    font-size: 14px;
    padding: 6px 8px;
    border-radius: 2px;
    font-weight: 700;
    &:hover{
      background-color: #FF2E1A;
      color: #fff;
    }
` 

const Input = styled.input.attrs({type: 'text'})`
    width: 100%;
    outline: none;
    resize: none;
    border: 0.5px solid #d9d9d9;
    padding: 12px;

    &::placeholder {    
        color: #888888;
        font-size: 16px;
        font-weight: 500;
    }
`

function HashTag({ tags, setTags }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          if (value.trim()) {
              setTags([...tags, value.trim()]);
              setValue('');
          }
      }
  }
  
  const handleRemove = (indexToRemove) => {
    const updated = tags.filter((_, index) => index !== indexToRemove);
    setTags(updated);
  };

  return (
      <HashCon>
          <StyledTitle>해시태그</StyledTitle>
          <HashTagList>
              {tags.map((tag, index) => (
                  <Tag key={index} onClick={() => handleRemove(index)}>#{tag}</Tag>
              ))}
          </HashTagList>
          <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="해시태그를 입력하고 엔터를 눌러주세요."
          />
      </HashCon>
  );
}

export default HashTag