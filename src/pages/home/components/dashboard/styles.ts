import { style } from "typestyle";

export const header = style({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 38,
});

export const heading = style({
  fontSize: 28,
  fontWeight: 900,
});

export const notificationBell = style({
  width: 18,
  height: 18,
});

export const subscriptionBtn = style({
  fontSize: 12,
  color: "#b0b0b0",
  padding: "8px 12px",
  borderRadius: 24,
  border: "1px solid #b0b0b0",
  background: "transparent",
  marginRight: 18,
  fontWeight: 400,
});

export const requests = style({
  fontSize: 14,
  fontWeight: 900,
  $nest: {
    "& span": {
      color: "#b0b0b0",
      fontWeight: 500,
    },
    "& a": {
      color: "#683acc",
    },
  },
});

export const id = style({
  fontSize: 14,
  fontWeight: 500,
  color: "#b0b0b0",
  textTransform: "uppercase",
  marginTop: 12,
});

export const cardWidth = (noOfRecords: number) =>
  style({
    width: `calc(100% / ${noOfRecords} - 24px)`,
  });
