// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');

// Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

// Event Listeners
middleContent.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'login') {
        goToLoginPage();
    }
});
