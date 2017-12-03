var modal = document.getElementById('qlba_modal_update');
var btn_update = document.getElementById('btn-modal-update');

var span = document.getElementsByClassName("close")[0]

btn_update.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}