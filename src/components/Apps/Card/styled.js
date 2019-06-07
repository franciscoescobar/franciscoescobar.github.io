import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;
export const CardWrapper = styled.div`
  display: flex;
  width: 75%;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
export const ImageWrapper = styled.div`
  flex: 1;
  background-image: url("https://images.pexels.com/photos/545331/pexels-photo-545331.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const DataWrapper = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  flex: 2.5;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  .data-title {
    font-weight: 400;
  }
  .data-tags {
    margin-top: -15px;
    > * {
      margin-right: 5px;
    }
  }
  .data-body {
    padding-right: 40px;
  }
`;
