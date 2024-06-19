function openModal(modalID) {
    document.getElementById(modalID).style.display="block"
}

function closeModal(modalID) {
    document.getElementById(modalID).style.display="none"
}

window.onclick=function (event) {
    if(event.target.classList.contains('modal')){
        event.target.style.display="none";
    }
}