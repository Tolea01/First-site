var form = document.getElementById('form-button');
var product_select1 = document.getElementById('product-category');
var product_select2 = document.getElementById('product-type');



product_select1.onchange = function (){
    var telephon = document.getElementsByClassName('telephon-product');
    var accesory = document.getElementsByClassName('accessory-product');
    var laptop = document.getElementsByClassName('laptop-product');
    var watch = document.getElementsByClassName('smart-watch-product') 

    function deleteProduct(product1, product2, product3){
        for(var i = 0; i < product1.length; i++){
            product1[i].style.cssText = 'display: none';
        }
        for(var i = 0; i < product2.length; i++){
            product2[i].style.cssText = 'display: none';
        }
        for(var i = 0; i < product3.length; i++){
            product3[i].style.cssText = 'display: none';
        }
    }



    if (product_select1.value == 'Accesorii'){
        deleteProduct(telephon, laptop, watch);
    }

    else if (product_select1.value == 'Telefoane'){
        deleteProduct(accesory, laptop, watch);
    }

    else if (product_select1.value == 'Laptopuri'){
        deleteProduct(accesory, telephon, watch);
    }

    else if (product_select1.value == 'Smart Watch'){
        deleteProduct(accesory, laptop, telephon);
    }
    else{}
 
    }




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

    else if (name.length <= 2) {
        document.getElementById('name').classList.add('input-error');
        error.innerHTML = 'Numele trebuie să conțină mai mult de 2 litere!';
    }

    else if (first_name.length == 1) {
        document.getElementById('first-name').classList.add('input-error');
        error.innerHTML = 'Prenumele este scris incorect!';
    }

    else if (email.split('@').length == 1 || email.split('.').length == 1) {
        document.getElementById('email').classList.add('input-error');
        error.innerHTML = 'Introduceți poșta electronică!';
    }

    else if (adress.length <= 5 || adress.length >= 45) {
        document.getElementById('adress').classList.add('input-error');
        error.innerHTML = 'Introduceți corect adresa domiciliului!';
    }

    else if (card_number.length <= 15 || card_number.length > 16) {
        document.getElementById('card-number').classList.add('input-error');
        error.innerHTML = 'Introduceți corect numărul cardului';
    }

    else if (security_cod.length <= 2 || security_cod.length > 3) {
        document.getElementById('security-code').classList.add('input-error');
        error.innerHTML = 'Introduceți corect codul de securitate';
    }

    else if (product_select1.value == 'Alegeți categoria produsului' || product_select2.value == 'Alegeți produsul'){
        error.innerHTML = 'Alegeți categoria și produsul acesteia';
    }

    else {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        window.location.reload();
    }

}








