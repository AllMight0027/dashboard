import React from "react";
import { NavLink } from "react-router-dom";
import AnalyticsIcon from "../icons/sidebar/AnalyticsIcon";
import BillingIcon from "../icons/sidebar/BillingIcon";
import ChatIcon from "../icons/sidebar/ChatIcon";
import HomeIcon from "../icons/sidebar/HomeIcon";
import ReportsIcons from "../icons/sidebar/ReportsIcons";
import VisitorsIcon from "../icons/sidebar/VisitorsIcon";
import { rowFlexCenterAll } from "../styles";
import {
  sidebarLogo,
  sidebarContainer,
  linkIcon,
  sidebarLink,
  linksContainer,
  notification,
  profileCard,
  profileImg,
  name,
  email,
  onlineDot,
} from "./styles";

const sidebarLinks = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Visitors",
    path: "/visitors",
    icon: <VisitorsIcon />,
    notifications: 4,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    name: "Customer Service",
    path: "/customer-service",
    icon: <ChatIcon />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <ReportsIcons />,
  },
  {
    name: "Billings",
    path: "/billings",
    icon: <BillingIcon />,
  },
];

type TProps = {
  isOnline: boolean;
  name: string;
  email: string;
  avatar: string;
};
const Sidebar: React.FC<TProps> = (props) => {
  return (
    <div className={sidebarContainer}>
      <img
        src="https://auracdn.fra1.digitaloceanspaces.com/aura-color.svg"
        alt="aura-nft"
        className={sidebarLogo}
      />
      <div className={linksContainer}>
        {sidebarLinks.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {({ isActive }) => (
              <div className={sidebarLink(isActive)}>
                <div className={linkIcon(isActive)}>{link.icon}</div>
                <div>{link.name}</div>
                {link.notifications && (
                  <div className={`${rowFlexCenterAll} ${notification}`}>
                    {link.notifications}
                  </div>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <div className={profileCard}>
        <div style={{ position: "relative" }}>
          <img src={props.avatar} alt="aura-nft" className={profileImg} />
          {props.isOnline && <div className={onlineDot} />}
        </div>
        <div>
          <div className={name}>{props.name}</div>
          <div className={email}>{props.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
