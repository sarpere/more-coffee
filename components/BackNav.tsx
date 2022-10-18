import { alpha, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { bgColor } from "../constants";
type Props = {
  src: string;
  alt?: string;
};
const BannerImg = styled("div")({
  width: "60%",
  maxWidth: 500,
  overflow: "hidden",
  height: "100%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});
const DropShadow = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(90deg, ${alpha(bgColor, 1)} 0%,  ${alpha(
    bgColor,
    0
  )} 50%)`,
});

const BackNav = ({ src, alt }: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      overflow="hidden"
      height={75}
      alignItems="center"
    >
      <Link href="/">
        <a>
          <Stack direction="row" spacing={2}>
            <KeyboardBackspaceIcon />
            <Typography noWrap variant="h5">
              {alt}
            </Typography>
          </Stack>
        </a>
      </Link>
      <BannerImg>
        <DropShadow />
        <img src={src} alt={alt} loading="lazy" />
      </BannerImg>
    </Stack>
  );
};

export default BackNav;
