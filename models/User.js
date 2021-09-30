const knex = require("../database/connection");
const bcrypt = require("bcrypt");
class User {
    async create(user){
        try{
            await knex.insert(user).table("users");
        }catch(err){
            console.log(err.message);
        }
    }

    async findEmail(email){
        try{
            const result = await knex.select("*").from("users").where({email: email});
            if(result.length > 0){
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err.message);
        }
    }
}
module.exports = new User();