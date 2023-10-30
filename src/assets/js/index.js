document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
      menuBtn.addEventListener("click", function() {
        // Xử lý sự kiện khi nút được nhấp
        sideMenu.style.display = 'block';
      });
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
        // Xử lý sự kiện khi nút được nhấp
        sideMenu.style.display = 'none';
      });
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    const darkMode = document.querySelector('.dark-mode');
    document.body.classList.toggle('dark-mode-variables');
  });