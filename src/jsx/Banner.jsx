import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ BannerImg }) =>
    BannerImg ? `url(${BannerImg})` : `url(${import.meta.env.BASE_URL + "Banner.png"})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f3f3f3;
  border-bottom: 1px solid #d9d9d9;
`

function Banner({ img }) {
  return <StyledWrapper BannerImg={img} />
}

export default Banner