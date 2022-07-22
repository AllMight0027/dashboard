import { style } from "typestyle";

export const rowFlex = style({
  display: "flex",
});

export const rowFlexCenterAll = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const rowFlexAlignCenter = style({
  display: "flex",
  alignItems: "center",
});

export const rowFlexSpaceBetween = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const margin = (margin: string | number) => style({ margin });

export const width = (width: string | number) => style({ width });
