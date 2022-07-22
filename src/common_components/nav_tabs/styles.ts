import { style, cssRaw } from "typestyle";

export const container = style({
  whiteSpace: "nowrap",
  overflowX: "scroll",
  height: "30px",
  position: "relative",
  width: "100%",
  zIndex: 1,
  paddingTop: "5px",
  paddingBottom: 8,
  maxWidth: 640,
});

export const children = (customWidth: string, selected: boolean) =>
  style({
    display: "inline-block",
    height: "100%",
    textAlign: "center",
    position: "relative",
    fontSize: 14,
    color: selected ? "#000000" : "#b0b0b0",
    fontWeight: 700,
    transition: "color 0.2s ease",
    width: customWidth ? customWidth : "50%",
    cursor: "pointer",
  });

export const borderBottomContainer = style({
  width: "100%",
  bottom: 0,
  display: "flex",
  position: "absolute",
});

export const borderBottom = style({
  bottom: 0,
  width: "100%",
  height: "1px",
  background: "#000000",
});

cssRaw(`
::-webkit-scrollbar{
  display:none;
}
::-moz-scrollbar{
  display:none;
}
.${children}:hover  {
  cursor: pointer;
}
`);

export const tabTextContainer = style({
  maxWidth: "fit-content",
  display: "inline-block",
});
