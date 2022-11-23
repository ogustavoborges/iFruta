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
    window.open('sucess_page.html', "_self");

    //btnLogin.click('sucess_page.html');
    //document.open('sucess_page.html');

  }

}

function qr_code() {
  var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });
  scanner.addListener('scan', function (content) {
    alert(content);
    //window.location.href=content;
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
      $('[name="options"]').on('change', function () {
        if ($(this).val() == 1) {
          if (cameras[0] != "") {
            scanner.start(cameras[0]);
          } else {
            alert('No Front camera found!');
          }
        } else if ($(this).val() == 2) {
          if (cameras[1] != "") {
            scanner.start(cameras[1]);
          } else {
            alert('No Back camera found!');
          }
        }
      });
    } else {
      console.error('No cameras found.');
      alert('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
    alert(e);
  });

}

function sucess_page() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let dia = today.toLocaleDateString()
  let hora = today.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('data').value = dia + ' às ' + hora + '.';

  var tl = anime.timeline({
    //easing: 'easeOutExpo',
    //duration: 750,
    autoplay: true,
  });

  tl
    .add({
      targets: '.success',
      scale: [0.001, 1.12],
      rotate: [100, 360],
      opacity: [0.001, 1],
      //easing: 'easeOutExpo',
      //translateY: 50, 
      duration: 1000

    },)


    .add({
      targets: '.checkmark',
      // transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      // scale:[0.001, 1.12],
      duration: 500,
      easing: 'easeInOutSine',

      strokeDashoffset: [anime.setDashoffset, 0],
    }, 200)

    .add({
      targets: '.line1',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.000, 1],
      duration: 1000

    }, 400)

    .add({
      targets: '.line2',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 300)

    .add({
      targets: '.line3',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 400)

    .add({
      targets: '.line4',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 400)

    .add({
      targets: '.line5',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 300)

    .add({
      targets: '.line6',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 400)

    .add({
      targets: '.line7',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 300)

    .add({
      targets: '.line8',
      transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
      opacity: {
        value: [0, 1],
        delay: 50,
      },
      scale: [0.001, 1.12],
      duration: 1000

    }, 400)


}

