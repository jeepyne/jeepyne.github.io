let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = function(image) {
    image.setAttribute ("src", image.getAttribute("data-src"));
    image.onload = function() {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window)
{const observer = new IntersectionObserver (function(items, observer) {
    items.forEach(function(item) {
    if(item.isIntersecting){
        loadImages (item.target);
        observer.unobserve(item.target);
        }
    }, imgOptions);
});

imagesToLoad.forEach (function(img) {
    observer.observe(img);
    });
}
    else {imagesToLoad.forEach(function(img) {
        loadImages(img);
    });
}