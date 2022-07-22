import { style } from "typestyle";

export const layoutContainer = style({
  height: "100vh",
  width: "100vw",
});

export const sidebarContainer = style({
  position: "fixed",
  inset: 0,
  right: "auto",
  padding: "24px",
  width: "260px",
});

export const content = style({
  margin: 12,
  height: "100%",
});

export const contentBox = style({
  width: "calc(100% - 300px)",
  height: "calc(100% - 24px)",
  borderRadius: 20,
  marginTop: 12,
  background: "#fff",
  marginLeft: 300,
  overflow: "overlay",
});

export const sidebarLogo = style({
  width: 64,
  height: 64,
  objectFit: "cover",
  borderRadius: "50%",
});

export const profileImg = style({
  width: 44,
  height: 44,
  objectFit: "cover",
  borderRadius: "50%",
  marginRight: 18,
});

export const onlineDot = style({
  width: 10,
  height: 10,
  borderRadius: "50%",
  position: "absolute",
  bottom: 4,
  right: 16,
  border: "1px solid #1a1c1e",
  background: "#5b8452",
});

export const notification = style({
  color: "#ffffff",
  background: "#6da761",
  width: 20,
  height: 20,
  borderRadius: "50%",
  fontSize: 11,
  position: "absolute",
  right: 18,
});

export const linksContainer = style({
  paddingTop: "74px",
  $nest: {
    "& a": {
      textDecoration: "none",
    },
  },
});

export const linkIcon = (selected: boolean) =>
  style({
    width: 16,
    height: 16,
    color: selected ? "#5b8452" : "#6f6f6f",
    marginRight: 18,
  });

export const sidebarLink = (selected: boolean) =>
  style({
    fontSize: 14,
    fontWeight: 500,
    color: selected ? "#ffffff" : "#6f6f6f",
    display: "flex",
    alignItems: "center",
    background: selected ? "#abaed41f" : "transparent",
    borderRadius: 10,
    padding: 18,
    marginBottom: 10,
    position: "relative",
  });

export const profileCard = style({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  bottom: 24,
  paddingTop: 18,
  borderTop: "1px solid #333333",
  left: 24,
  right: 24,
});

export const name = style({
  color: "#ffffff",
  fontSize: 14,
  lineHeight: "18px",
});

export const email = style({
  color: "#6f6f6f",
  fontSize: 12,
  marginTop: 4,
});
