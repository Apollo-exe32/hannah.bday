// DOM ELEMENTS
const pages = document.querySelectorAll('.page');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const giftButtons = document.querySelectorAll('.gift-btn');
const backButtons = document.querySelectorAll('.back-btn');
const clickSound = document.getElementById('click-sound');
const bgMusic = document.getElementById('bg-music');

// FUNCTIONS
function showPage(id) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// FIRST PAGE
showPage('page1');

// RUNAWAY "NO" BUTTON
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// YES BUTTON
yesBtn.addEventListener('click', () => {
    clickSound.play();
    bgMusic.volume = 0.2; // Makes it quiet (20% volume)
    bgMusic.play();
    showPage('page2');
});
// GIFT BUTTONS
giftButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        clickSound.play();
        const target = btn.dataset.target;
        showPage(target);
    });
});

// BACK BUTTONS
backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        clickSound.play();
        showPage('page2');
    });
});

// FLOATING EMOJIS
function createFloatingEmoji() {
    const emojis = ['🩵', '💤', '⚪', '💠', '💧', '🤍', '🐳'];
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 10000);
}

setInterval(createFloatingEmoji, 500);