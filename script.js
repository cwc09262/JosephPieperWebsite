window.onscroll = function() { stickyToolbar() };

var imageContainer = document.querySelector('.image-container');
var toolbar = document.querySelector('.toolbar');
var offset = imageContainer.offsetHeight;

function stickyToolbar() {
    if (window.pageYOffset >= offset) {
        toolbar.classList.add("sticky");
    } else {
        toolbar.classList.remove("sticky");
    }
}
