import db from '../models/index';   

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log(data);
        // let temp = data.dataValues;
        // console.log(temp);
        return res.render('homepage.ejs', { dataUser: JSON.stringify(data) });
    }
    catch(e) {
        console.log(e);
    }
}

module.exports = { getHomePage };