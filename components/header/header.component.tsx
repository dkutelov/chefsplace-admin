import Link from "next/link";
import { useRouter } from "next/router";

import {
  Header as HeaderMain,
  NavContainer,
  Logo,
  NavItem,
} from "./header.styles";

export const Header = () => {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <HeaderMain>
      <nav className="container">
        <NavContainer>
          <Logo>
            <Link href="/">
              <h1>Chefsplace App Admin</h1>
            </Link>
          </Logo>
          <NavItem>
            <Link href="/products/add">
              <a
                className={
                  router.pathname == "/products/add" ? "active-menu-item" : ""
                }
              >
                Нов Продукт
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/edit">Редакция</Link>
          </NavItem>
        </NavContainer>
      </nav>
    </HeaderMain>
  );
};
