import { StyledContainer } from './container.style';

export default function Container ({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}
