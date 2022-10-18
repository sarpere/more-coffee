import { Grid } from "@mui/material";
import { GetStaticPropsContext } from "next";
import React from "react";
import BackNav from "../components/BackNav";
import FoodList from "../components/foodList";
import { server } from "../config";
import { menuTypes } from "../types";

type Props = {
  items: menuTypes.category;
};

const OrderList = ({ items }: Props) => {
  console.log(items);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BackNav src={items.category.image} alt={items.category.name} />
      </Grid>
      <Grid item xs={12}>
        <FoodList items={items.data} />
      </Grid>
    </Grid>
  );
};
// This gets called on every request
export const getServerSideProps = async (
  context: GetStaticPropsContext<{ category: string }>
) => {
  // Fetch data from external API
  try {
    const res = await fetch(
      `${server}/api/menu?category=${context.params?.category}`
    );
    const data = await res.json();
    // Pass data to the page via props
    return { props: { items: data } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default OrderList;
