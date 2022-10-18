import Footer from "./footer";
import { ReactElement } from "react";
import MenuDrawer from "./MenuDrawer";
interface props {
  children: ReactElement;
}
export default function Layout({ children }: props) {
  return (
    <>
      <MenuDrawer>{children}</MenuDrawer>
      <Footer />
    </>
  );
}
