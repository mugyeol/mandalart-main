import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = () => {
  return (
    <TitleWrapper>
      <h1>Mandalart...</h1>
    </TitleWrapper>
  );
};

export default Title;
