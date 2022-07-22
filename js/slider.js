// window.setInterval(function () {
//     const a = document.querySelectorAll(".boxx");
//     a[4].className = "boxx move-out-from-right", setTimeout(function () {
//         const b = a.length;
//         4 < b && (a[4].className = "boxx boxx--hide");
//         const c = a[b - 1];
//         c.classList.remove("boxx--hide"), a[b - 1].remove();
//         let d = document.querySelector(".cards__containerr");
//         d.insertBefore(c, d.firstChild), c.className = "boxx move-to-position1-from-right", a[0].className = "boxx move-to-position2-from-right", a[1].className = "boxx move-to-position3-from-right", a[2].className = "boxx move-to-position4-from-right", a[3].className = "boxx move-to-position5-from-right"
//     }, 500)
// }, 5e3);
// var slideIndex = 0;
// showSlides();

function shiftLeft() {
  const boxes = document.querySelectorAll(".boxx");
  const tmpNode = boxes[0];
  boxes[0].className = "boxx move-out-from-left";

  setTimeout(function () {
    if (boxes.length > 5) {
      tmpNode.classList.add("boxx--hide");
      boxes[5].className = "boxx move-to-position5-from-left";
    }
    boxes[1].className = "boxx move-to-position1-from-left";
    boxes[2].className = "boxx move-to-position2-from-left";
    boxes[3].className = "boxx move-to-position3-from-left";
    boxes[4].className = "boxx move-to-position4-from-left";
    boxes[0].remove();

    document.querySelector(".cards__containerr").appendChild(tmpNode);
  }, 100);
}

function shiftRight() {
  const boxes = document.querySelectorAll(".boxx");
  boxes[4].className = "boxx move-out-from-right";
  setTimeout(function () {
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
      boxes[4].className = "boxx boxx--hide";
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("boxx--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".cards__containerr");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "boxx move-to-position1-from-right";
    boxes[0].className = "boxx move-to-position2-from-right";
    boxes[1].className = "boxx move-to-position3-from-right";
    boxes[2].className = "boxx move-to-position4-from-right";
    boxes[3].className = "boxx move-to-position5-from-right";
  }, 100);
}

function showSlides() {
  var a,
    b = document.getElementsByClassName("mySlides");
  for (a = 0; a < b.length; a++) b[a].style.display = "none";
  slideIndex++,
    slideIndex > b.length && (slideIndex = 1),
    (b[slideIndex - 1].style.display = "block"),
    setTimeout(showSlides, 5e3);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(a) {
  showDivs((slideIndex += a));
}

function showDivs(a) {
  var b,
    c = document.getElementsByClassName("mySlides"),
    d = document.getElementsByClassName("demo");
  for (
    a > c.length && (slideIndex = 1), 1 > a && (slideIndex = c.length), b = 0;
    b < c.length;
    b++
  )
    c[b].style.display = "none";
  for (b = 0; b < d.length; b++)
    d[b].className = d[b].className.replace(" w3-white", "");
  (c[slideIndex - 1].style.display = "block"),
    (d[slideIndex - 1].className += " w3-white");
}
