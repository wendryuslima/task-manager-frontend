import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: rebeccapurple;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
