var form = document.getElementById('form-button');
form.onclick = function (event) {
    event.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var name = document.getElementById('name').value;
    var first_name = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    var card_number = document.getElementById('card-number').value;
    var security_cod = document.getElementById('security-code').value;
    var error = document.getElementById('error');


    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add('input-error');
        }
        else {
            inputs[i].classList.remove('input-error');
        }
    }


    if (name == '' || first_name == '' || email == '' || adress == '' || card_number == '' || security_cod == '') {
        error.innerHTML = 'Compleați câmpurile goale!';
    }

    else if(name.length <= 2){
        document.getElementById('name').classList.add('input-error');
        error.innerHTML = 'Numele trebuie să conțină mai mult de 2 litere!';
    }

    else if(first_name.length == 1){
        document.getElementById('first-name').classList.add('input-error');
        error.innerHTML = 'Prenumele este scris incorect!';
    }

    else if(email.split('@').length == 1 || email.split('.').length == 1){
        document.getElementById('email').classList.add('input-error')
        error.innerHTML = 'Introduceți poșta electronică'
    }

    else{
        window.location.reload()
    }


}








