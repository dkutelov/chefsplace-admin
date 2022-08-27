import styled from "styled-components";

export const Header = styled.header`
  background-color: antiquewhite;
  position: relative;
  border-bottom: 1px solid var(--color-accent-dark);
  padding-top: 1em;
  padding-bottom: 0.75em;
  padding: 1em 1em 0.75em;
`;

export const NavContainer = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;

  h1 {
    font-size: 1.25em;
    flex-grow: 1;
  }
`;

export const Logo = styled.li`
  flex-grow: 1;
  cursor: pointer;
`;

export const NavItem = styled.li`
  margin-right: 3rem;

  a {
    text-decoration: none;
  }

  a:hover {
    color: gray;
  }
`;
