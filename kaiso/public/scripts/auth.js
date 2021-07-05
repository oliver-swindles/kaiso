// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {

    } else {
        
    }
})

// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        console.log('User has signed up. Welcome to Kaiso o((>ω< ))o');
    });
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    console.log('User has signed out.');
})

// Sign In
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        console.log('User has signed in. Welcome back to Kaiso （づ￣3￣）づ')
    });
})