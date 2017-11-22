var modal = document.getElementById('qlba-modal');
var btn_add = document.getElementById('btn-modal-add');


var span = document.getElementsByClassName("close")[0]

btn_add.onclick = function() {
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