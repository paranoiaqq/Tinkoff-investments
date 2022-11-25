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

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.play();
      } else {
        animation.current.reverse();
      }
    }

    animation.current = anime({
      targets: ".button",
      fontSize: 24,
      easing: "easeInOutSine",
    });
  }, [isHovered]);

  return <button className={`button ${className}`}>{children}</button>;
}

export default MenuButton;
