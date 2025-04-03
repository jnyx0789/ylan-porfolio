document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const backButton = document.getElementById("backButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (!firstName || !lastName || !email || !message) {
            alert("All fields are required!");
            return;
        }

        let confirmSubmit = confirm("Do you want to submit?");
        if (confirmSubmit) {
            document.getElementById("submittedData").innerHTML = `
                <strong>Name:</strong> ${firstName} ${lastName} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Message:</strong> ${message}
            `;
            form.style.display = "none";
            confirmationMessage.style.display = "block";
            backButton.style.display = "inline-block";
        }
    });

    backButton.addEventListener("click", () => {
        form.style.display = "block";
        confirmationMessage.style.display = "none";
        form.reset();
    });
});
