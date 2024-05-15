// Add click event listeners to the 'generate' and 'copy' buttons
document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

// Function to generate a random password
function generatePassword() {
    const length = 12; // Set the password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // Define the characters that can be included in the password
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        // Loop to generate each character of the password
        password += charset.charAt(Math.floor(Math.random() * n));
        // Randomly pick a character from the charset and append it to the password
    }
    document.getElementById('password').value = password;
    // Display the generated password in the password input field
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.select(); // Select the text in the input field
    passwordInput.setSelectionRange(0, 99999); // Ensure the selection range covers all content for mobile devices
    document.execCommand('copy'); // Copy the selected text to the clipboard

    // Optional: Display a message that the password has been copied
    alert('Password copied to clipboard!');
}
