const EMAIL = 'andy02chen@gmail.com'

function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    var element = document.getElementById('emailAlert');
    element.classList.add('fade-in');
    setTimeout(function() {
        element.classList.remove('fade-in');
    }, 1000);
};

var modal = document.getElementById('imgModal');
var modalImg = document.getElementById('proj-example-img');

document.querySelectorAll('.proj-main-desc img').forEach(image =>{
    image.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = image.src;
    };
});

// var projImg = document.getElementsByClassName('proj-img');


// projImg.onclick = function() {
//     modal.style.display = block;
//     modalImg.src = this.src;
// };

var cross = document.getElementsByClassName('close')[0];
cross.onclick = function() {
    modal.style.display = "none";
};