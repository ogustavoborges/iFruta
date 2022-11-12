const { json } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030; 

// test user
const user = require('./user.json')

// render via ejs
app.set("view engine", 'ejs');


//body parser middleware
app.use(express.json());
// pegar info do form
app.use(express.urlencoded({extended: false}));


//escuta na porta
app.listen(PORT, () => {
    console.log('rodando')
    console.log(user)

});


// app.get('/', (req, res) => {
//     res.render('index.ejs', {exempl: 'exemplo' });
// });

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', async (req, res) => {

    // aqui implementar cod login ** LDAP **
    let username = user.user;
    let senha = user.senha;
    console.log(username, senha)
    try {
        if (username === req.body.user){
            console.log('ok user')
            console.log(req.body.senha)
            if (senha === req.body.senha){
                return res.redirect("/sucesso");
            }
        } else {
            return res.redirect("/login");
        }
    } catch (e) {
        console.log(e)
    }
    
    res.redirect('/login')
});


app.get('/sucesso', (req, res) => {
    let data = new Date;
    let reg = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
    let regHora = `${data.getHours()}:${data.getMinutes()}`
    console.log(reg, regHora)
    res.render('sucess.ejs', {data: reg, hora: regHora});
});

// app.get('/', (req, res) => {
//     res.render('***.ejs');
// });



//app.get('/:userQuery', (req, res) =>{s
//     res.render('index', {data: {userQuery: req.params.userQuery}})
// });



//static folder: todos os caminhos nesse dir n precisam de rotas ex: about.html dentro de public poderia ser acessado como local:port/about.html
app.use(express.static(path.join(__dirname, 'public')));
