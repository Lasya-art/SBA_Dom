

// Export function for validating form inputs
export function validateForm() {
    const firstname = document.querySelector('input[name="Firstname"]').value;
    const lastname = document.querySelector('input[name="Lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const date = document.querySelector('input[name="date"]').value;

    if (!firstname) {
        alert("Please enter your first name.");
        document.querySelector('input[name="Firstname"]').focus();
        return false;
    }
    if (!lastname) {
        alert("Please enter your last name.");
        document.querySelector('input[name="Lastname"]').focus();
        return false;
    }
    if (!email) {
        alert("Please enter your email address.");
        document.querySelector('input[name="email"]').focus();
        return false;
    }
    if (!phone) {
        alert("Please enter your phone number.");
        document.querySelector('input[name="phone"]').focus();
        return false;
    }
    if (!date) {
        alert("Please enter your move-in date.");
        document.querySelector('input[name="date"]').focus();
        return false;
    }

    return { firstname, lastname, email, phone, date };
}

// Export function for handling form submission
export function submitForm() {
    const formData = validateForm();
    if (formData) {
        alert(`Thank you for booking a tour, ${formData.firstname} ${formData.lastname}`);
        document.getElementById("registration").reset();
    }
}
