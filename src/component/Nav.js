import styled from "styled-components";
import Button from "./Button/Button";

const NavWrapper = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Nav = ({updateGoals}) => {
  return (
    <NavWrapper>
        <Button row={true} onClick={updateGoals}>저장</Button>
        <Button row={true}>logout</Button>
        <Button row={true}>이미지로 저장</Button>
    </NavWrapper> 
  );
};

export default Nav;
