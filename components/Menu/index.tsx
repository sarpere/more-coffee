import * as React from "react";
import Box from "@mui/material/Box";
import Item from "./Item";
import { menuTypes } from "../../types";

export default function Menu({ items }: { items: menuTypes.menuItem[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        rowGap: "10px",
        columnGap: "10px",
      }}
    >
      {items.map((item) => (
        <Item key={item.url} item={item} />
      ))}
    </Box>
  );
}
