// لإضفاء حركة Fade In على البطاقة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
  const card = document.querySelector('.profile-card');
  if(card){
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "all 0.7s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 120);
  }
});