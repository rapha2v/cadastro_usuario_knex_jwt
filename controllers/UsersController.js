const user = require("../models/User"); //importando o model users, para realizar as operações no banco de dados
const bcrypt = require("bcrypt"); //importando o bcrypt para transformar a senha em um hash
class userController {
    async create(req, res) { //método create que será utilizado na rota user para cadastrar um novo usuário
        const { nome, email, senha, role } = req.body; // pegando os dados da requisição do tipo post
        if (email == "") { //checando se a chave email da requisição veio vazia
            res.status(400).json({//Jeito para retornar status, seguido de um json com retorno de uma menssagem de erro
                status: "error",
                message: "Você é um animal e não enviou"
            });
            return;
        }
        if(await user.findEmail(email)){ //checando se o email que foi passado já existe
            res.status(406).json({//Jeito para retornar status, seguido de um json com retorno de uma menssagem de erro
                status: "error",
                message: "Este email já está cadastrado"
            });
            return;
        }
        const hash = await bcrypt.hash(senha, 10); // através desse método do bcrypt é possível transformar a senha em hash LER MAIS SOBRE O BCRYPT
        await user.create({ name: nome, email: email, password: hash, role: role }); //se passou por todas as validações feitas chama o método create da classe user e cria um novo usuário no banco de dados
        res.status(200).json({ // e retorna o status de sucesso seguido de uma mensagem
            status: "success",
            message: "Usuário cadastrado com sucesso."
        })
    }
}
module.exports = new userController();