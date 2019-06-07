import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
export const StyledAvatar = styled(Avatar)`
  min-width: 120px;
  min-height: 120px;
  transform: translate3d(0, -50%, 0);
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-bottom: -50px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .flex-item {
    text-align: center;
    flex-basis: 100%;
    margin-bottom: 20px;
  }
  .body {
    flex-basis: 65%;
  }
  .title {
  }
`;
