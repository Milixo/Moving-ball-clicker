let clickCounter = 0; // Brojač klikova

document.addEventListener('DOMContentLoaded', () => {
    centerBall();
});

document.getElementById('movingBall').addEventListener('click', function() {
    clickCounter++;
    document.getElementById('clickCount').textContent = `Klikovi: ${clickCounter}`;

    const ball = this;
    const container = document.querySelector('.container');
    const header = document.getElementById('header');
    const clickCount = document.getElementById('clickCount');
    const message = document.getElementById('message');

    const containerRect = container.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const clickCountRect = clickCount.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    // Calculate max and min boundaries for ball position
    const maxX = containerRect.width - ballRect.width;
    const minX = 0;
    const maxY = clickCountRect.top - headerRect.bottom - ballRect.height;
    const minY = headerRect.bottom;

    // Generate random positions within the calculated boundaries
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    // Apply CSS transform to move the ball
    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
    
    // Display message after a certain number of clicks
    if (clickCounter % 10 === 0) {
        message.textContent = `Bravo! Kliknuli ste ${clickCounter} puta!`;
    } else {
        message.textContent = '';
    }
});

function centerBall() {
    const ball = document.getElementById('movingBall');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    ball.style.left = `${(containerRect.width - ballRect.width) / 2}px`;
    ball.style.top = `${(containerRect.height - ballRect.height) / 2}px`;
}
