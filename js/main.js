// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// 表单提交提示
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('已收到您的咨询，我们将尽快与您联系！');
    form.reset();
  });
}