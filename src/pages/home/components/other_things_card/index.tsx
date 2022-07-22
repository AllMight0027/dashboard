import React from "react";
import ChevronRightIcon from "../../../../icons/ChevronRightIcon";
import OutlinkIcon from "../../../../icons/OutlinkIcon";
import {
  margin,
  rowFlexAlignCenter,
  rowFlexCenterAll,
  rowFlexSpaceBetween,
  width,
} from "../../../../styles";
import {
  solidCard,
  heading,
  infoHeading,
  moreIcon,
  subHeading,
  grid,
  transparentCard,
  transparentBody,
  infoDarkHeading,
  transparentFooter,
  iconContainer,
  totalTime,
  purpleCircle,
  lightSubHeading,
} from "./styles";

type TProps = {
  totalTime: string;
  fromLastWeek: number;
};

const OtherThingsCard: React.FC<TProps> = (props) => {
  return (
    <div>
      <div className={`${margin("0 0 24px")} ${rowFlexSpaceBetween}`}>
        <div className={heading}>Other things</div>
        <ChevronRightIcon />
      </div>
      <div className={grid}>
        <div className={solidCard}>
          <div className={rowFlexSpaceBetween}>
            <div>
              <div className={infoHeading}>Screen time</div>
              <div className={subHeading}>Payment Details</div>
            </div>
            <div className={moreIcon}>
              <OutlinkIcon />
            </div>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Kbdtm0l0dCMR19zgUwIuwihkugSjs9ejLQ&usqp=CAU"
            alt="graph"
            className={`${margin("18px 0 0")} ${width("100%")}`}
          />
        </div>
        <div className={transparentCard}>
          <div className={transparentBody}>
            <div className={infoDarkHeading}>Total time</div>
            <div className={rowFlexSpaceBetween}>
              <div>
                <div className={infoHeading}>This week</div>
                <div className={totalTime}>{props.totalTime}</div>
              </div>
              <div className={`${rowFlexCenterAll} ${purpleCircle}`}>
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/long-arrow-right.png"
                  alt="icon"
                  className={width(14)}
                />
              </div>
            </div>
          </div>
          <div className={transparentFooter}>
            <div className={rowFlexAlignCenter}>
              <div className={`${rowFlexCenterAll} ${iconContainer}`}>
                <img
                  src="https://img.icons8.com/small/96/000000/statistics.png"
                  alt="icon"
                  className={width(18)}
                />
              </div>
              <div>
                <div className={lightSubHeading}>From last week</div>
                <div className={subHeading}>{props.fromLastWeek}%</div>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherThingsCard;
