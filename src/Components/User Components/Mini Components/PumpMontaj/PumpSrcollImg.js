import React from "react";
import TextRevealScroll from './TextRevealScroll';
export default function TestScrollImg() {
  React.useEffect(() => {
    const html = document.documentElement;
    const canvas = document.getElementById("pump-montaj");
    const context = canvas.getContext("2d");

    const frameCount = 120;
    const currentFrame = index => (
      `.././Recordings/ETA 2065-200_${index.toString().padStart(4, '0')}.jpg`
    )

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width = 5000;
    canvas.height = 2900;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()

  }, []);
  return (
    <div>
     <TextRevealScroll />
      <canvas
        id="pump-montaj"
      >
      </canvas>
    </div>

  );
}

