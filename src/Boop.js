import React, { useState } from "react";
import { animated } from "react-spring";
import useBoop from "./use-boop";
import { CSSTransition } from "react-transition-group";

const Boop = props => {
  const [style, trigger] = useBoop({
    y: props.y
  });
  const [isContent, setIsContent] = useState(false);

  const triggerClick = () => {
    setIsContent(!isContent);
  };
  return (
    <div className="container">
      <button onMouseEnter={trigger} onClick={triggerClick}>
        <span className="auto">Hover Me</span>
        <animated.span className="margin" style={style}>
          <img src="./img/circle-down.svg" alt="icon-moon" className="size" />
        </animated.span>
      </button>

      <CSSTransition
        in={isContent}
        timeout={330}
        classNames="para"
        unmountOnExit
      >
        <p className="para">Nothing to See Here!!</p>
      </CSSTransition>
    </div>
  );
};
export default Boop;
