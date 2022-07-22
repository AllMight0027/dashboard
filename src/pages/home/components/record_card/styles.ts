import { style } from "typestyle";

export const card = style({
  padding: "18px 16px",
  borderRadius: 14,
  border: "1px solid #f0f0f0",
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  position: "relative",
});

export const logoContainer = style({
  width: 48,
  height: 48,
  borderRadius: "50%",
  background: "#1a1c1e",
  marginRight: "16px",
});

export const label = style({
  fontSize: 12,
  fontWeight: 400,
  color: "#b0b0b0",
  marginBottom: 8,
});

export const gainLoss = (isLoss: boolean) =>
  style({
    fontSize: 12,
    fontWeight: 900,
    color: isLoss ? "#dd0000" : "#6da761",
    position: "absolute",
    bottom: 18,
    right: 20,
  });
