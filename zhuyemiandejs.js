// DOM 加载完成后初始化交互效果
document.addEventListener("DOMContentLoaded", () => {
  // 粒子背景初始化：禁用点击事件，点击时背景动效保持不变
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#0ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false }
      }
    }
  });

  // 卡片悬停光效
  document.querySelectorAll(".glass-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  // 动态法轮旋转
  setInterval(() => {
    document.querySelectorAll(".mandala").forEach((mandala) => {
      mandala.style.transform = `rotate(${(Date.now() / 50) % 360}deg)`;
    });
  }, 50);
});
