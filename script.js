function teste() {
    console.log('teste');
    let user;
    let senha;
    let btnLogin = document.getElementById('login');

    function setUser() {
        user = document.getElementById('user').value = 'usuario';
        senha = document.getElementById('senha').value = '123';
    }

    this.loginSucess = loginSucess;
    function loginSucess() {
        window.open('sucess_page.html');
        
        //btnLogin.click('sucess_page.html');
        //document.open('sucess_page.html');

    }

}

function sucess_page(){
    let data = new Date();
    let dia = data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear();
    let hora = data.getHours() + ':' + data.getMinutes();
    document.getElementById('data').value = dia + ' ' + hora;
    //document.getElementById('hora').value = ;
}