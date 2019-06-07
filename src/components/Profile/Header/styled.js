import styled from "styled-components";
import { Avatar } from "@material-ui/core";
export const Wrapper = styled.div`
  margin-top: 89px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #cbcbcb;
  height: 240px;
  width: 80%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > * {
    display: flex;
    align-items: center;
  }
`;
export const SideWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  > * {
  }
`;
export const StyledAvatar = styled(Avatar)`
  width: 200px !important;
  height: 200px !important;
  margin: 10;
  flex-basis: 200px;
  border: 1px solid #cbcbcb;
  margin: auto 0;
`;
