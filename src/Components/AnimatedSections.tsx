import React from "react";
import styled, { css } from "styled-components";
import useIntersectionObserver from "../hooks/UseIntersectionsObserver";

const Section = styled.section<{ isVisible: boolean }>`
  opacity: 0;
  /* transform: translateX(100%); */
  /* transition: opacity 0.6s ease-out, transform 0.6s ease-out; */
  transition: opacity 3s ease-out;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
  padding: 1rem;
  margin-bottom: calc(100vh - 4rem);
  /* margin: 1rem 0; */
  /* background: #444; */
  color: #fff;
`;

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const [setRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Section ref={setRef} isVisible={isIntersecting}>
      {children}
    </Section>
  );
}
