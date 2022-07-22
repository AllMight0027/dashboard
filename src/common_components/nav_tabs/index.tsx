/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  container,
  children,
  borderBottomContainer,
  borderBottom,
} from "./styles";
import { useSpring, animated } from "react-spring";

type TNavTabs = {
  setIndex: (idx: number) => void;
  list: string[];
  index: number;
  customWidthList?: string[];
};

const NavTabs: React.FC<TNavTabs> = (props: TNavTabs) => {
  const length = props.list.length;
  const [barWidth, setBarWidth] = React.useState(0);
  const [offsetLeft, setOffsetLeft] = React.useState(0);

  const setIndex = (index: number) => {
    props.setIndex(index);
  };

  const navContainer = React.useRef(null);

  const bottomBarPosition = useSpring({
    config: { duration: 250 },
    position: "absolute",
    width: barWidth,
    left: offsetLeft,
  });

  const bottomBarAnimationFunc = () => {
    const ele = document.getElementById(
      `tabNav-${props.index}`
    ) as HTMLDivElement;
    if (ele) {
      const spanElement = ele.firstElementChild as HTMLDivElement;
      setBarWidth(spanElement.offsetWidth);
      setOffsetLeft(
        spanElement.getBoundingClientRect().x +
          navContainer?.current?.["scrollLeft"] -
          318
      );
    }
  };

  const animateBottomBar = () => {
    setTimeout(bottomBarAnimationFunc, 100);
  };

  React.useEffect(() => {
    animateBottomBar();
  }, [props.index]);

  return (
    <div ref={navContainer} className={container}>
      {length > 0 &&
        props.list.map((obj: string, idx: number) => (
          <div
            key={obj + idx}
            id={`tabNav-${idx}`}
            className={children(
              props.customWidthList
                ? props.customWidthList[idx]
                : `${100 / length}%`,
              idx === props.index
            )}
            onClick={() => {
              setIndex(idx);
            }}
          >
            <span>{obj}</span>
          </div>
        ))}

      <animated.div
        style={bottomBarPosition as unknown as React.CSSProperties}
        className={borderBottomContainer}
      >
        <div className={borderBottom} />
      </animated.div>
    </div>
  );
};

export default NavTabs;
