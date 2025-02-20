---
# First Page
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: 
title: Anime.js

# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade

mdc: true

setup: |

---

# 用 Anime.js 強化你的前端動畫！
Becky Liu

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  GO!!GO!!GO <carbon:arrow-right />
</div>


---
# page2
transition: fade-out
---

# What is Anime.js

Anime.js 是一個輕量級的 JavaScript 動畫庫，具有簡單但功能強大的 API。 [Anime.js](https://animejs.com/)

<div>
    <img
        class="absolute w-[80%] h-[60%] object-contain"
        src="C:\Users\User\OneDrive\桌面\anime.js\picture\anime.js-1.png"
        alt="anime image"
    >
</div>
<!-- Footer -->


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---
# page3
layoutClass: gap-16
---

# A sample anime example
<div style="max-height: 400px; overflow-y: auto;">

```js

import { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedBox = () => { const boxRef = useRef(null); 
  useEffect(() => {
    anime({
      targets: boxRef.current, 
      translateX: [0, 300], 
      scale: [1, 3], 
      backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
      borderRadius: ["0%", "50%"], 
      easing: "easeInOutQuad",
      duration: 2000,
      loop: true, 
      direction: "alternate",
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

```
</div>
<span> </span>



---
# page4
layout: two-cols
layoutClass: gap-16
---

# More anime example

<div style="max-height: 450px; overflow-y: auto;">

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime.js Advanced Demo</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #282c34;
            overflow: hidden;
        }
        .box {
            width: 80px;
            height: 80px;
            background-color: #ff0000;
            position: absolute;
            border-radius: 10px;
            transform-origin: center;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    
    <script>
        let boxAnimation = anime.timeline({
            loop: true, 
            easing: "easeInOutSine"
        });

        boxAnimation
            .add({
                targets: ".box",
                translateX:[-100, 100], 
                backgroundColor: "#00ff00",
                duration: 1000
            })
            .add({
                targets: ".box",
                translateY: [0, 100],
                rotate: 180, 
                backgroundColor: "#0000ff",
                duration: 1000
            })
            .add({
                targets: ".box",
                translateX: [100, -100],
                scale: [1, 1.5], 
                backgroundColor: "#ff00ff", 
                duration: 1000,
                borderRadius: ["10px", "50%"], 
            })
            .add({
                targets: ".box",
                translateY: [100, 0],
                rotate: 360, 
                scale: [1.5, 1], 
                backgroundColor: "#ff0000",
                duration: 1000,

            });
    </script>
</body>
</html>
```
</div>
::right::

<div id="animation-container" style="position: relative; width: 100%; height: 500px; background-color: #282c34; display: flex; justify-content: center; align-items: center;">
  <div class="box" style="width: 80px; height: 80px; background-color: #ff0000; position: absolute; border-radius: 10px; transform-origin: center;"></div>
</div>

<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(()=> {
let boxAnimation = anime.timeline({
  loop: true, 
  easing: "easeInOutSine",
});

boxAnimation
  .add({
    targets: ".box",
    translateX: [-100, 100], 
    backgroundColor: "#00ff00", 
    duration: 1000
  })
  .add({
    targets: ".box",
    translateY: [0, 100], 
    rotate: 180, 
    backgroundColor: "#0000ff", 
    duration: 1000
  })
  .add({
    targets: ".box",
    translateX: [100, -100],
    scale: [1, 1.5], 
    backgroundColor: "#ff00ff",
    duration: 1000,
    borderRadius: ["10px", "50%"], 
  })
  .add({
    targets: ".box",
    translateY: [100, 0], 
    rotate: 360, 
    scale: [1.5, 1], 
    backgroundColor: "#ff0000",
    duration: 1000,
  });
});
</script>

---
# page5
layoutClass: gap-16
---
#  More anime example - Rocket 
<div style="max-height: 450px; overflow-y: auto;">
```js
import React, { useState } from "react";
import anime from "animejs";
export default function RocketAnimation() {
  const [runCount, setRunCount] = useState(0);
  const handleRun = () => {
    setRunCount((prev) => prev + 1);
    anime({
      targets: ".rocket",
      translateX: [0, 500], 
      easing: "easeInOutSine",
      duration: 2000,
      complete: () => {
        anime.set(".rocket", { translateX: 0 }); 
      }
    });
  };
  return (
    <div className="container">
      <div className="track">
        <div className="rocket">🚀</div>
      </div>
      <button onClick={handleRun}>RUN</button>
      <p>恭喜你跑了 {runCount} 次,你還剩下 {runCount+1}次</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: black;
          color: white;
        }
        .track {
          width: 500px;
          height: 2px;
          border-top: 2px dashed white;
          position: relative;
          margin-bottom: 20px;
        }
        .rocket {
          position: absolute;
          top: -20px;
          font-size: 30px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          background-color: white;
          color: black;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}
```
</div>

---
#page 6
layout: 
image:
---

# 為什麼選擇 Anime.js?

<table>
  <thead>
    <tr>
      <th scope="col">比較項目</th>
      <th scope="col">Anime.js</th>
      <th scope="col">CSS Animation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">簡單性</th>
      <td>程式碼簡潔,簡單易用，支援 JS 操作</td>
      <td> 需寫多個 @keyframes</td>
    </tr>
    <tr>
      <th scope="row">控制力</th>
      <td>可在動畫執行中隨時調整（如改變速度、顏色）</td>
      <td>無法中途改變動畫狀</td>
    </tr>
    <tr>
      <th scope="row">事件回調</th>
      <td> 可透過回調控制動畫開始、結束時觸發的事件</td>
      <td>需透過 animationend + 配合 JavaScript 使用</td>
    </tr>
    <tr>
      <th scope="row">時間軸控制</th>
      <td>支援 Timeline，適合有序的多段動畫</td>
      <td>無內建時間軸，需要手動調整</td>
    </tr>
  </tbody>
</table>

---
# page 7
layoutClass: gap-16
---

# Anime.js & css Animation是用在哪裡

<table>
  <thead>
    <tr>
      <th scope="col">使用場景</th>
      <th scope="col">推薦</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">簡單按鈕 Hover 效果</th>
      <td>CSS Animation </td>
    </tr>
    <tr>
      <th scope="row">Loading 圖示動畫</th>
      <td>CSS Animation ✅ 或 Anime.js</td>
    </tr>
    <tr>
      <th scope="row">多階段動畫序列</th>
      <td> Anime.js </td>
    </tr>
    <tr>
      <th scope="row">SVG 線條繪製效果</th>
      <td>Anime.js</td>
    </tr>
  </tbody>
</table>

<div class="image-container">
  <img src="C:\Users\User\OneDrive\桌面\anime.js\picture\star.png" alt="Moving Image" class="moving-image" id="movingImage" />
</div>

<style>
 body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      background-color: #f0f0f0;
      position: relative;
      overflow: hidden; 
    }

    .moving-image {
      position: absolute;
      width: 50px;  
      height: auto;
      bottom: 0;
      right:0;
    }
</style>

<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
  const img = document.getElementById("movingImage");

  if (img.complete) {
    startAnimation();
  } else {
    img.onload = startAnimation;
  }

  function startAnimation() {
    anime({
      targets: "#movingImage",
      translateX: [
        { value: -100, duration: 2000 },
        { value: 100, duration: 2000 },
        { value: 100, duration: 2000 },
      ],
      translateY: [
        { value: -100, duration: 2000 },
        { value: 100, duration: 2000 },
        { value: 0, duration: 2000 },
      ],
      easing: "easeInOutSine",
      loop: true,
    });
  }
});
</script>

---
# page 8
layout: two-cols
layoutClass: gap-16
---

# Anime.js 適合用在哪裡

<div class="card">
  <div class="card-title">Anime.js 適合：</div>
  <div class="card-content">
    <ul>
      <li>輕量、簡單、UI 動畫</li>
      <li>按鈕動畫</li>
      <li>Loading 效果</li>
      <li>過場特效</li>
    </ul>
  </div>

</div>


<div class="image-container">
  <img src="C:\Users\User\OneDrive\桌面\anime.js\picture\wave.png" alt="Moving Image" class="moving-image" id="movingImage" />
</div>

<style>
 body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      background-color: #f0f0f0;
      position: relative;
      overflow: hidden; 
    }

    .moving-image {
      position: absolute;
      width: 50px;  
      height: auto;
      bottom: 0;
      right:0;
    }
</style>

<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
  const img = document.getElementById("movingImage");

  if (img.complete) {
    startAnimation();
  } else {
    img.onload = startAnimation;
  }

  function startAnimation() {
    anime({
      targets: "#movingImage",
      translateX: [
        { value: -100, duration: 2000 },
        { value: 100, duration: 2000 },
        { value: 100, duration: 2000 },
      ],
      translateY: [
        { value: -100, duration: 2000 },
        { value: 100, duration: 2000 },
        { value: 0, duration: 2000 },
      ],
      easing: "easeInOutSine",
      loop: true,
    });
  }
});
</script>