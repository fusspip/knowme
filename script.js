function generateResponse() {
    // Get the input value
    const userInput = document.getElementById('userInput').value.trim();
    const responseElement = document.getElementById('response');

    // Generate and display the response
    if (userInput.toLowerCase() === 'hi') {
        responseElement.textContent = 'In this video we will learn to create header section of website, where we will add navigation bar with Logo';
    } else {
        responseElement.textContent = 'I don\'t understand that.';
    }
}


