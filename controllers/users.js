const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

const usersCount = users.length;

 const list = (req, res) =>{
    res.json(users);
 };

 const show = (req, res) => {
    const id = req.params.usersId;
    const foundUsers = users.filter(users => users.id === Number(id));
    console.log(foundUsers);
    if(foundUsers.length){
        return res.json(foundUsers);
    }
    else{
        return res.status(404).json({ msg: `Error 404: User not found.` })
    }
};

const create = (req, res) =>{
    console.log(req.body);

    const newUser ={  
    id: usersCount + 1,
        ...req.body,
    };

    if(!newUser.name || !newUser.username || !newUser.email || !newUser.address || !newUser.phone || !newUser.website || !newUser.company){
        return res.status(400).json({ msg: `Error 400 Bad Request, All user values are required.` });
    }else{
        users.push(newUser);
        res.json(newUser);
    }
};

const updateUser = (req, res) =>{
     const id = req.params.usersId;
     const filteredIndex = users.findIndex(user =>user.id === Number(id));
     console.log(filteredIndex)
     if(filteredIndex >= 0){
        users[filteredIndex].name = sampleUser.name;
        res.json(users[filteredIndex])
      }
      else{
        res.status(400).json({ msg: `Error 400 Bad Request, User not exist.` })
    }
};

const deleteUser = (req, res) =>{
    const id = req.params.usersId;
    const filteredUser = users.find(user =>user.id === Number(id));
    if(filteredUser){
        const newUsersArr = users.filter(users => users.id != Number(id));
        console.log(newUsersArr);
        res.send({ msg: `User deleted.` })
    }
    else{
        res.status(400).json({ msg: `Error 400 Bad Request, User not exist.` })
    }
};

module.exports = {
    list,
    show,
    create,
    updateUser,
    deleteUser

};
