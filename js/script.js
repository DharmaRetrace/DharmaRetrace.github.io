// js/script.js

document.addEventListener('DOMContentLoaded', function () {
  // 为导航内锚点链接添加平滑滚动效果
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // 调整滚动偏移量，避免与固定区域冲突
          behavior: 'smooth'
        });
      }
    });
  });

  // 延迟5秒后显示一个美化版的佛语提示（Toast）
  setTimeout(function () {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = '愿你心静如水，平安喜乐！';
    document.body.appendChild(toast);

    // 触发 CSS 过渡动画
    setTimeout(function () {
      toast.classList.add('show');
    }, 100);

    // 3秒后淡出提示，再0.5秒后移除该元素
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        document.body.removeChild(toast);
      }, 500);
    }, 3000);
  }, 5000);
});
