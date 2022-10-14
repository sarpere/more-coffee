import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";
import { menuTypes } from "../types";
interface props {
  menu: menuTypes.menuItem[];
}
const Home: NextPage<props> = ({ menu }) => {
  return (
    <div>
      <Menu items={menu} />
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/menu`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { menu: data } };
}
export default Home;
