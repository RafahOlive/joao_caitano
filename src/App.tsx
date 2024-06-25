import { Header } from "./Components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import AnimatedSection from "./Components/AnimatedSections";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const MainText = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 10rem;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div></div>

      <div>
        <AnimatedSection>
          <MainText>
            <h2>O Fitness está no nosso DNA 🧬</h2>
          </MainText>

          <p>Content for section 1.</p>
        </AnimatedSection>
        <AnimatedSection>
          <h2>Section 2</h2>
          <p>Content for section 2.</p>
        </AnimatedSection>
        <AnimatedSection>
          <h2>Section 3</h2>
          <p>Content for section 3.</p>
        </AnimatedSection>
      </div>
    </Container>
  );
}
