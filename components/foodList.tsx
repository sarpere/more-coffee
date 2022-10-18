import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React, { Fragment } from "react";
import { menuTypes } from "../types";

type Props = {
  items: menuTypes.categoryList[];
};

const FoodList = ({ items }: Props) => {
  return (
    <List>
      {items.map((item, i) => (
        <Fragment key={item.name}>
          <ListItem
            alignItems="flex-start"
            secondaryAction={<ListItemText primary={item.price} />}
          >
            <ListItemText primary={item.name} />
          </ListItem>
          {i < items.length && <Divider variant="inset" component="li" />}
        </Fragment>
      ))}
    </List>
  );
};

export default FoodList;
