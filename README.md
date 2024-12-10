# Login Form with Password Visibility Toggle

This project provides a simple login form with a password visibility toggle feature. It allows users to view and hide their password input and includes basic login validation for a predefined username and password.

## Features:
- **Username and Password Validation**: A simple check is performed to verify the entered credentials (username: "pavan@outlook.com" and password: "Pavan@99").
- **Password Visibility Toggle**: Allows users to show or hide their password using an eye icon.
- **Error Handling**: Displays an error message if the username or password is incorrect.
- **Form Redirection**: Upon successful login, the user is redirected to a specified URL (e.g., LinkedIn profile) using the form's action.

## Technologies Used:
- **HTML**: For creating the form structure and layout.
- **CSS**: For styling the form and providing a clean user interface.
- **JavaScript**: For handling the logic behind login validation and password visibility toggle.

## How It Works:

1. **Login Validation**:
   - The user enters their email and password.
   - If the entered email is "pavan@outlook.com" and the password is "Pavan@99", the form redirects the user to the specified LinkedIn profile URL and submits the form.
   - If the credentials are incorrect, an error message is displayed below the form.

2. **Password Visibility Toggle**:
   - The user can toggle the visibility of their password by clicking the eye icon next to the password input field.
   - The password is shown in plain text when the icon is clicked and hidden again when clicked.

### Prerequisites:
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript.
