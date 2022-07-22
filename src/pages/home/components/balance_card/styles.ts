import { style } from "typestyle";

export const card = style({
  padding: 30,
  background: "#ffffff",
  borderRadius: 14,
  display: "flex",
  alignItems: "flex-end",
  height: 90,
  justifyContent: "space-between",
  position: "relative",
  boxShadow: "0px 3px 15px rgba(0,0,0,0.015)",
});

export const graphImg = style({
  height: 64,
});

export const addBtn = style({
  color: "#f1f1f1",
  fontSize: 12,
  background: "#4a12ea",
  borderRadius: 6,
  padding: "14px 28px",
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

export const lastTransaction = style({
  fontSize: 12,
  color: "#b0b0b0",
  position: "absolute",
  top: 58,
  left: 30,
});
