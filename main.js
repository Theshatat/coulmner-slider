let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
let coulmn = document.querySelector(".coulmn");
let scrolly = 0;
let height =
  coulmn.children.length * coulmn.children[0].clientHeight -
  coulmn.children[0].clientHeight * 4;

btnPrev.addEventListener("click", function () {
  if (scrolly > -height) {
    scrolly += -150;
  }

  coulmn.style.transform = `translateY(${scrolly}px)`;
});

btnNext.addEventListener("click", function () {
  if (scrolly < 0) {
    scrolly += 150;
  }
  coulmn.style.transform = `translateY(${scrolly}px)`;
});
