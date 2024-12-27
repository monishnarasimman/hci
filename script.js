function promptAndRecognize(promptText, fieldId) {
    speak(promptText);
    startRecognition(fieldId);
}

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function startRecognition(fieldId) {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
        alert("Speech recognition is not supported in this browser.");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById(fieldId).value = transcript;

        if (fieldId === 'password') {
            speak('Click Enter to login');
        }
    };

    recognition.onerror = function(event) {
        alert('Speech recognition error. Try again.');
    };

    recognition.start();
}

function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Show loading spinner
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Logging in...';
    document.body.appendChild(loadingMessage);

    // Simulate login process
    setTimeout(() => {
        // Redirect to preferences page after a delay
        window.location.href = "./preferences.html";
    }, 2000); // Simulate a 2-second delay for login
}
