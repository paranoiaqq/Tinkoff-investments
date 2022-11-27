import React, { useRef, useEffect } from "react";
import "./MenuButton.scss";
import anime from "animejs/lib/anime.es.js";

type Props = {
  children: string;
  className: string;
};

function MenuButton({ children, className }: Props) {
  const animation = useRef<any>(null);
  const animationReversed = useRef<any>(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: buttonRef,
      color: "rgba(0,0,0,0.8)",
      autoplay: false,
      duration: 250,
    });
    animationReversed.current = anime({
      targets: buttonRef.current,
      color: "rgba(0, 0, 0, 0.54)",
      autoplay: false,
      duration: 250,
    });
  }, []);

  const enterHandler = () => {
    console.log(buttonRef);
    animation.current.play();
  };

  const leaveHandler = () => {
    console.log(buttonRef);
    animationReversed.current.play();
  };

  return (
    <button
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      ref={buttonRef}
      className={`button ${className} `}
    >
      {children}
    </button>
  );
}

export default MenuButton;
