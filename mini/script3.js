document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOption = option.textContent;
            speak(`You selected ${selectedOption}.`);
            handleButtonClick(selectedOption);
        });
    });
});

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function handleButtonClick(option) {
    switch (option) {
        case 'TODAYS NEWS':
            window.location.href = 'news.html';
            break;
        case 'LISTEN SONGS':
            window.location.href = 'songs.html';
            break;
        case 'LIVE MATCHES':
            window.location.href = 'matches.html';
            break;
        case 'EDUCATION':
            window.location.href = 'education.html';
            break;
        default:
            speak("Option not recognized.");
    }
}

function proceedToNextPage() {
    window.location.href = './feedback.html';
}