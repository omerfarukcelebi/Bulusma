const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

let isDragging = false;
let startX;
let scrollLeft;

// Kart genişliği + gap
function getCardWidth() {
  const card = cards[0];
  const gap = 20;
  return card.offsetWidth + gap;
}

// Mouse Events
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  alignToClosestCard();
});

slider.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    alignToClosestCard();
  }
});

// Touch Events (mobil uyum)
slider.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchend", () => {
  isDragging = false;
  alignToClosestCard();
});

// Scroll sonrası en yakın karta hizalama
function alignToClosestCard() {
  const cardWidth = getCardWidth();
  const index = Math.round(slider.scrollLeft / cardWidth);
  slider.scrollTo({
    left: index * cardWidth,
    behavior: "smooth"
  });
}









const buttons = document.querySelectorAll('.card1buton');
const detayKutular = [
  document.getElementById('detay-1'),
  document.getElementById('detay-2'),
  document.getElementById('detay-3')
];

let aktifIndex = null;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (aktifIndex === index) {
      detayKutular[index].classList.remove('show');
      setTimeout(() => {
        detayKutular[index].style.display = 'none';
      }, 400);
      aktifIndex = null;
    } else {
      detayKutular.forEach((kutu, i) => {
        kutu.classList.remove('show');
        kutu.style.display = 'none';
      });

      detayKutular[index].style.display = 'block';
      setTimeout(() => {
        detayKutular[index].classList.add('show');
      }, 50);

      aktifIndex = index;
    }
  });
});






document.addEventListener('DOMContentLoaded', function() {
  // Tüm detay butonlarını ve kutularını seç
  const detailButtons = document.querySelectorAll('.card1buton');
  const detailBoxes = document.querySelectorAll('.detay-kutu');
  
  // Sayfa yüklendiğinde ilk detayı göster (eğer aktif buton yoksa)
  if (!document.querySelector('.card1buton.active')) {
    detailButtons[0].classList.add('active');
    detailBoxes[0].classList.add('show');
  }
  
  // Buton tıklama olayları
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Tüm butonlardan active classını kaldır
      detailButtons.forEach(btn => btn.classList.remove('active'));
      
      // Tüm detay kutularını gizle
      detailBoxes.forEach(box => box.classList.remove('show'));
      
      // Tıklanan butona active classını ekle
      this.classList.add('active');
      
      // İlgili detay kutusunu göster
      const detailId = this.getAttribute('data-detail');
      document.getElementById(detailId).classList.add('show');
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const hedef = document.querySelector(this.getAttribute('href'));
    hedef.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Galeri kaydırma işlevini optimize etmek için
document.querySelector('.resimler').addEventListener('scroll', function() {
  const container = document.querySelector('.resimler');
  const scrollPosition = container.scrollLeft;

  // Kaydırma tamamlandığında işlem yapılabilir
  if (scrollPosition >= container.scrollWidth - container.offsetWidth) {
    console.log('Galeri sonuna gelindi.');
  }
});

