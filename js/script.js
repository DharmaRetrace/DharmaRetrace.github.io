// js/script.js

document.addEventListener("DOMContentLoaded", function () {
  // 导航内锚点平滑滚动效果
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // 调整偏移，避免固定内容遮挡
          behavior: "smooth",
        });
      }
    });
  });

  // 延迟5秒后显示一条科技感佛语提示（Toast）
  setTimeout(function () {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "愿你心静如水，平安喜乐！";
    document.body.appendChild(toast);

    // 启动过渡动画
    setTimeout(function () {
      toast.classList.add("show");
    }, 100);

    // 3秒后淡出提示，并在淡出后移除元素
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () {
        document.body.removeChild(toast);
      }, 500);
    }, 3000);
  }, 5000);
});
