// Keeps the footer copyright year current automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Gallery lightbox / slideshow ----------
// Only runs on pages that actually have a gallery (art.html).
(function () {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const tiles = Array.from(gallery.querySelectorAll(".art-tile"));
  const items = tiles.map((tile) => ({
    src: tile.querySelector("img").getAttribute("src"),
    title: tile.dataset.title || "",
    price: tile.dataset.price || "",
  }));

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxName = document.getElementById("lightbox-name");
  const lightboxPrice = document.getElementById("lightbox-price");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxName.textContent = item.title;
    lightboxPrice.textContent = item.price;
    lightboxPrice.classList.toggle("sold", item.price === "Sold");
  }

  function open(index) {
    show(index);
    lightbox.classList.add("open");
  }

  function close() {
    lightbox.classList.remove("open");
  }

  tiles.forEach((tile, i) => {
    tile.addEventListener("click", () => open(i));
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => show(current - 1));
  nextBtn.addEventListener("click", () => show(current + 1));

  // Click on the dark overlay (outside the image) also closes it.
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  // Keyboard support: Escape to close, arrows to navigate.
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
