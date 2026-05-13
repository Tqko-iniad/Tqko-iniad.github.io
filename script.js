// ナビゲーションやボタンを押したときに、指定した場所へ移動する関数
function scrollToSection(sectionId) {
  const targetSection = document.querySelector(sectionId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// ヘッダーのナビゲーションをスムーズスクロールにする
const navLinks = document.querySelectorAll(".site-nav a, .site-title");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const sectionId = link.getAttribute("href");
    scrollToSection(sectionId);
  });
});

// 「自己紹介を見る」ボタン
const viewAboutButton = document.getElementById("viewAboutButton");

viewAboutButton.addEventListener("click", function() {
  scrollToSection("#about");
});

// ページ上部へ戻るボタン
const backToTopButton = document.getElementById("backToTopButton");

backToTopButton.addEventListener("click", function() {
  scrollToSection("#top");
});

// Hobbyカードをクリックしたときに選択状態を切り替える
const hobbyCards = document.querySelectorAll(".hobby-card");

hobbyCards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.classList.toggle("is-selected");
  });
});

// ここに画像関連の処理を書く
const changeableImages = document.querySelectorAll(".changeable-image");

changeableImages.forEach(function(image) {
  image.addEventListener("error", function() {
    image.style.display = "none";
  });

  if (image.complete && image.naturalWidth === 0) {
    image.style.display = "none";
  }
});
