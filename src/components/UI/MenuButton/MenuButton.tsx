import React, { useRef, useEffect, useState } from "react";
import styles from "./MenuButton.module.scss";
import anime from "animejs/lib/anime.es.js";

type Props = {
  children: string;
  className: string;
};

function MenuButton({ children, className }: Props) {
  // const [isClicked, setIsClicked] = useState(false);
  const animation = useRef<any>(null);
  const animationReversed = useRef<any>(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: buttonRef.current,
      color: "rgba(0,0,0,0.8)",
      autoplay: false,
      duration: 300,
    });
    animationReversed.current = anime({
      targets: buttonRef.current,
      color: "rgba(0, 0, 0, 0.54)",
      autoplay: false,
      duration: 300,
    });
  }, []);

  const enterHandler = () => {
    animation.current.play();
  };

  const leaveHandler = () => {
    animationReversed.current.play();
  };

  return (
    <>
      <button
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
        // onClick={() => {
        //   setIsClicked((state) => !state);
        // }}
        ref={buttonRef}
        className={`${styles.button} ${className} `}
      >
        {children}
        <div className="line" />
      </button>
    </>
  );
}

export default MenuButton;
