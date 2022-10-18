import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
type Props = {};
const FooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  padding: "3px 6px",
}));
const Footer = (props: Props) => {
  return (
    <FooterBox>
      <Typography
        variant="caption"
        color="black"
        style={{ fontWeight: "bold" }}
      >
        Adres:{" "}
        <a
          href="https://goo.gl/maps/RVciBx21EBEt1dVi7"
          target={"_blank"}
          rel="noreferrer"
        >
          Adatepe, Doğuş Cd. No: 3/19, 35400 Buca Osb/Buca/İzmir{" "}
        </a>
      </Typography>
    </FooterBox>
  );
};

export default Footer;
