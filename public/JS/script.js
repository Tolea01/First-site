var form = document.getElementById('form-button');
form.onclick = function(event){
    event.preventDefault();
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].classList.add('input-error');
        }
        else{
            inputs[i].classList.remove('input-error');
        }
    }
}