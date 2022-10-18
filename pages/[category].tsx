import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { server } from "../config";
import { menuTypes } from "../types";

type Props = {
  items: menuTypes.categoryList[];
};

const OrderList = (props: Props) => {
  console.log(props.items);
  return <div>OrderList</div>;
};
// This gets called on every request
export const getServerSideProps = async (
  context: GetStaticPropsContext<{ category: string }>
) => {
  // Fetch data from external API
  const res = await fetch(
    `${server}/api/menu?category=${context.params?.category}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  // Pass data to the page via props
  return { props: { items: data } };
};
export default OrderList;
