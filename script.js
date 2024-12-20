// Select all buttons
const buttons = document.querySelectorAll('button');

// Function to play sound and add visual effect
function playSound(button) {
    const soundSrc = button.getAttribute('data-sound');
    const audio = new Audio(soundSrc); 
    audio.play(); 
  
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 200); 
}
// Function to change background color 
function changeBackgroundColor(isCorrect) {
    if (isCorrect) {
        document.body.classList.add('correct-background');
        document.body.classList.remove('incorrect-background');
    } else {
        document.body.classList.add('incorrect-background');
        document.body.classList.remove('correct-background');
    }

    setTimeout(() => {
        document.body.classList.remove('correct-background', 'incorrect-background');
    }, 200); 
}
  
// Mouse click event for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playSound(button);
    });
});
  
// Keyboard press event
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); 
    const button = Array.from(buttons).find(btn => btn.getAttribute('data-key') === key);
    if (button) {
        playSound(button);
        changeBackgroundColor(true);
    } else {
        changeBackgroundColor(false);
    }
});
