function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send("service_8vf8ud8", "template_0uzbsgt", templateParams)
        .then(() => {
            alert("Email sent!!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send mail. Please try again.");
        });
}
