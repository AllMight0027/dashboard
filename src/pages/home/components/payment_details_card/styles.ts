import { style } from "typestyle";

export const card = style({
  padding: 30,
  background: "#ffffff",
  borderRadius: 14,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  position: "relative",
  boxShadow: "0px 3px 15px rgba(0,0,0,0.015)",
});

export const graphImg = style({
  height: 50,
});

export const date = style({
  fontSize: 12,
  fontWeight: 800,
});

export const heading = style({
  fontSize: 18,
  fontWeight: 800,
  position: "absolute",
  top: 28,
  left: 30,
});

export const moreIcon = style({
  position: "absolute",
  top: 24,
  right: 30,
  cursor: "pointer",
});

export const infoHeading = style({
  fontSize: 12,
  color: "#b0b0b0",
  marginBottom: 8,
});
