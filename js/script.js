// js/script.js

document.addEventListener('DOMContentLoaded', function() {
  // 为页面内锚点链接添加平滑滚动效果
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 小惊喜：延迟5秒后显示一条佛语提醒
  setTimeout(function() {
    alert("愿你心静如水，平安喜乐！");
  }, 5000);
});
