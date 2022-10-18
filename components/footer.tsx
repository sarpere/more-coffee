import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
type Props = {};
const FooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.primary.main,
  color: "black",
  padding: "3px 6px",
}));
const Footer = (props: Props) => {
  return (
    <FooterBox>
      <Typography variant="body2" style={{ fontWeight: "bold" }}>
        Adres: Adatepe, Doğuş Cd. No: 3/19, 35400 Buca Osb/Buca/İzmir
      </Typography>
    </FooterBox>
  );
};

export default Footer;
