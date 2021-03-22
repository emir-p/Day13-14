// Masonry Gallery
/*var msnry = new Masonry(".mosaic-gallery", {
    columnWidth: 200,
    itemSelector: ".gallery-card-holder",
    gutter: 20,
});*/

// Modal and masonry grid
var modal = document.getElementById("myModal");
var galleryCard = document.querySelectorAll(".gallery-card-holder");
var closeBtn = document.getElementsByClassName("close")[0];

function galleryInit() {
    var col1 = 0,
        col2 = 0,
        col3 = 0,
        col4 = 0,
        colW = 200,
        gutter = 20;

    for (var i = 0; i < galleryCard.length; i++) {
        // Masonry grid - vertical space
        var eHeight = galleryCard[i].offsetHeight;
        if (i == 0) {
            galleryCard[i].style.top = 0;
            galleryCard[i].style.left = 0;
            col1 += eHeight;
        } else if (i == 1) {
            galleryCard[i].style.top = col2 + "px";
            galleryCard[i].style.left = "220px";
            col2 += eHeight;
        } else if (col1 <= col4 && col1 <= col2 && col1 <= col3) {
            galleryCard[i].style.top = col1 + "px";
            galleryCard[i].style.left = 0;
            col1 += eHeight;
        } else if (col2 <= col1 && col2 <= col3 && col3 <= col4) {
            galleryCard[i].style.top = col2 + "px";
            galleryCard[i].style.left = "220px";
            col2 += eHeight;
        } else if (col3 <= col2 && col3 <= col2 && col3 <= col4) {
            galleryCard[i].style.top = col3 + "px";
            galleryCard[i].style.left = "440px";
            col3 += eHeight;
        } else if (col4 <= col3 && col4 <= col1 && col4 <= col3) {
            galleryCard[i].style.top = col4 + "px";
            galleryCard[i].style.left = "660px";
            col4 += eHeight;
        }

        // Modal events
        galleryCard[i].onclick = function () {
            var modalSrc = this.getAttribute("data-source");
            modal.style.display = "block";

            var openPage = new XMLHttpRequest();
            openPage.open("GET", "../src/" + modalSrc, true);
            openPage.onreadystatechange = function () {
                document.getElementById("modalContent").innerHTML = this.responseText;
            };
            openPage.send();
        };
    }
}

window.onload = galleryInit;

closeBtn.onclick = function () {
    modal.style.display = "none";
};