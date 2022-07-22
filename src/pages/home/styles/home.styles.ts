import { style } from "typestyle";

export const tabsContainer = style({
  padding: "10px 8px 0",
  background: "#ffffff",
  boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.02)",
});

export const container = style({
  background: "#f1f1f1",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const summaryContainer = style({
  padding: "30px",
  background: "#ffffff",
});

export const detailsContainer = style({
  padding: "30px",
  flexGrow: 1,
  background: "#f1f1f1",
});
