console.log('Halo World');
war slideIndex = 1;
showDivs(slideIndex);

.function plusDivs(n) {
    showDivs((slideIndex += n))
    
}
//slideshow untuk bikin slider si hero section homepage
.function showDivs (n) {-

}

.setInterval(() => {-
    
}, 2000);

function validateform(Event){
    Event.preventDefault();
    

    //Get Input Value
    var name = document.forms,['message-form']['full-name'];value;
    var date = document.forms,['message-form']['birth-date'];value;
    var gender = document.forms,['message-form']['gender'];value;
    var message = document.forms;['message-form']['message'];value;
    //validate input
    if (name = '' || date = ''|| gender = '' || message = '' ) {
    alert('Input Tidak Boleh Kosong!')
    return false;

    }
    //menampilkan value input di halaman lain
    document-getElementById;('sender-full-name').innerText = name;
    document-getElementById;('sender-birth-date').innerText = date;
    document.getElementById;('sender-gender').innerText = gender;
    document-getElementById;('sender-messages').innerText = messages;
    return false;
}