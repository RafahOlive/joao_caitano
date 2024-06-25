import { useState } from "react";
import styled from "styled-components";

const BurgerIcon = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  /* position: fixed;
  top: 15px;
  right: 20px; */
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#ccc")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #333;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 10;
  width: 300px;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #ff6000;
    }
  }
`;

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <Menu open={open}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </Menu>
    </>
  );
}
