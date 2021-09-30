const user = require("../models/User"); //importando o model users, para realizar as operações no banco de dados
const bcrypt = require("bcrypt"); //importando o bcrypt para transformar a senha em um hash
class userController {
    async create(req, res) {
        const { nome, email, senha, role } = req.body;
        if (email == "") {
            res.status(400).json({//Jeito para retornar status, seguido de um json com retorno de uma menssagem de erro
                status: "error",
                message: "Você é um animal e não enviou"
            });
            return;
        }
        if(await user.findEmail(email)){
            res.status(406).json({//Jeito para retornar status, seguido de um json com retorno de uma menssagem de erro
                status: "error",
                message: "Este email já está cadastrado"
            });
            return;
        }
        const hash = await bcrypt.hash(senha, 10);
        await user.create({ name: nome, email: email, password: hash, role: role })
        res.status(200).json({
            status: "success",
            message: "Usuário cadastrado com sucesso."
        })
    }
}
module.exports = new userController();