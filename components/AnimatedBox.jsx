import { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedBox = () => { const boxRef = useRef(null); // 綁定 DOM

  useEffect(() => {
    anime({
      targets: boxRef.current, // 指定動畫對象
      translateX: [0, 300], // 向右移動 300px
      scale: [1, 3], // 放大
      backgroundColor: ["#ff0000", "#00ff00", "#0000ff"], // 紅 → 綠 → 藍
      borderRadius: ["0%", "50%"], // 變圓形
      easing: "easeInOutQuad", // 平滑動畫
      duration: 2000, // 2 秒
      loop: true, // 無限循環
      direction: "alternate", // 來回動畫
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#ff0000",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};
export default AnimatedBox;