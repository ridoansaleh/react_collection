import styled from "styled-components";

export const PartOne = styled.div`
  display: ${({ active }) => (active == 1 ? "flex" : "none")};
  flex-direction: column;
`;

export const PartTwo = styled.div`
  display: ${({ active }) => (active == 2 ? "flex" : "none")};
  flex-direction: column;
`;
