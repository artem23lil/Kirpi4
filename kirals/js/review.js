const reviewTrack = document.querySelector('.review-track');
const reviewItems = document.querySelectorAll('.review-item');

let currentIndex = 0;
const reviewItemWidth = reviewItems[0].offsetWidth + 20; 
const visibleReviews = 3; 
const totalReviews = reviewItems.length;


function autoScroll() {
    currentIndex++;
    if (currentIndex > totalReviews - visibleReviews) {
        currentIndex = 0; 
    }
    reviewTrack.style.transform = `translateX(-${currentIndex * reviewItemWidth}px)`;
}

setInterval(autoScroll, 6000);
