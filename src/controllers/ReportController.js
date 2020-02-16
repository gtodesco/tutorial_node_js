const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {

        // Encontrar todos os usuários que tem email que termina com @gmail.com
        // Desses usuários, buscar todos que moram na rua Rua Ricardo Krueger
        // Desses usuários, buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Ricardo Krueger' } },
                { association: 'techs', 
                  required: false, // Não precisa cair nessa condição para ser trazido na listagem  
                  where: { 
                      name: {
                          [Op.like]: 'React%'
                      }
                   } 
                },
            ]
        });

        return res.json(users);
    }
}