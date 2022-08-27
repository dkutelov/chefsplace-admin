import { Header } from "../../components/header";
import { GlobalStyle } from "./global-styles";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default Layout;
