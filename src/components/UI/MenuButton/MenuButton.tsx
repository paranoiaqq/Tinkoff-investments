import React, { useState, useRef, useEffect } from "react";
import "./MenuButton.css";
import anime from "animejs/lib/anime.es.js";

type Props = {
  children: string;
  className: string;
};

function MenuButton({ children, className }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<any>(null);
  const animationReversed = useRef<any>(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".button",
      color: "rgba(0,0,0,0.8)",
      autoplay: false,
      duration: 250,
    });
    animationReversed.current = anime({
      targets: ".button",
      color: "rgba(0, 0, 0, 0.54)",
      autoplay: false,
      duration: 250,
    });
  }, []);

  const enterHandler = () => {
    animation.current.play();
  };

  const leaveHandler = () => {
    animationReversed.current.play();
  };

  return (
    <button
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}

export default MenuButton;
