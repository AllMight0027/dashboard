import { style } from "typestyle";

export const solidCard = style({
  padding: 20,
  background: "#ffffff",
  borderRadius: 14,
  position: "relative",
  boxShadow: "0px 3px 15px rgba(0,0,0,0.015)",
  maxHeight: 184,
  minHeight: 184,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const transparentCard = style({
  borderRadius: 14,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #dddddd",
  overflow: "hidden",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "30px",
});

export const date = style({
  fontSize: 12,
  fontWeight: 800,
});

export const subHeading = style({
  fontSize: 14,
  fontWeight: 900,
});

export const lightSubHeading = style({
  fontSize: 13,
  fontWeight: 900,
  color: "#b0b0b0",
  marginBottom: 5,
});

export const heading = style({
  fontSize: 18,
  fontWeight: 800,
});

export const moreIcon = style({
  cursor: "pointer",
  alignSelf: "start",
});

export const infoHeading = style({
  fontSize: 12,
  color: "#b0b0b0",
  fontWeight: 900,
  marginBottom: 8,
});

export const transparentBody = style({
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

export const transparentFooter = style({
  padding: "14px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid #dddddd",
});

export const infoDarkHeading = style({
  fontSize: 10,
  fontWeight: 900,
  color: "#000000",
  textTransform: "uppercase",
});

export const iconContainer = style({
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#ffffff",
  marginRight: "12px",
});

export const purpleCircle = style({
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "4px solid #ffffff",
  background: "#4a12ea",
});

export const totalTime = style({
  fontSize: 24,
  fontWeight: 700,
});
