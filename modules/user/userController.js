const User = require('./userModel');
const bcrypt = require('bcryptjs');


exports.register = async(req, res) => {
    const {username, email, password, confirmPassword, fullName} = req.body;

    // 1 - verificar se as senhas batem
    try {
        if(password !== confirmPassword) {
            req.flash('error', 'As senhas não coincidem.');
            return res.direct('/register');
        }

        // 2 - verificar se o usuário ou o email já existem no banco
        const emailExists = await User.findOne({where: {email}});
        const usernameExists = await User.findOne({where: {username}});

        if(emailExists || usernameExists) {
            req.flash('error', 'Este já está    cadastrado');
            return res.redirect('/register');
        }

        // 3 - já q o email e o username estão ok, e as senhas batem,  ecriptar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(password, hashedPassword);

        // 4 - inserir o registro no banco de dados
        await User.create({
            username,
            email,
            password: hashedPassword,
            fullName
        });

        // 5 - redireciona o novo usuario para o login
        req.flash('success', 'Conta criada com sucesso! Faça o seu login.');
        return res.redirect('/login');

    } catch (error) {
        console.log(error);
        req.flash('error', 'Erro ao criar a conta. Tente novamente.');
        res.redirect('/register');
    }
};