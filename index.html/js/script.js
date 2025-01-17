// التأكد من تحميل الخلفية بشكل صحيح
document.addEventListener("DOMContentLoaded", function () {
    const backgroundVideo = document.getElementById("background-video");
    if (!backgroundVideo) {
        console.error("Background video element not found!");
    } else {
        backgroundVideo.addEventListener("error", () => {
            console.error("Failed to load the background video.");
        });
    }
});

// تحذير عند إضافة منتجات إلى السلة
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// تحسين تجربة التمرير بالسلاسة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// إضافة مؤقت لتحميل الصور أو الفيديو إذا كان هناك مشكلة
function preloadMedia() {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');

    images.forEach((image) => {
        image.onload = () => console.log(`Image loaded: ${image.src}`);
        image.onerror = () => console.error(`Failed to load image: ${image.src}`);
    });

    videos.forEach((video) => {
        video.onloadeddata = () => console.log(`Video loaded: ${video.src}`);
        video.onerror = () => console.error(`Failed to load video: ${video.src}`);
    });
}

// تنفيذ التحميل المسبق عند تحميل الصفحة
preloadMedia();
