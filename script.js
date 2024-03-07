const EMAIL = 'andy02chen@gmail.com'

function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    var element = document.getElementById('emailAlert');
    element.classList.add('fade-in');
    setTimeout(function() {
        element.classList.remove('fade-in');
    }, 1000);
};