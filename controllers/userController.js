const User = require(/models/User);

// GET all users
module.exports = {
    getUsers(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req,res){
        User.findOne({_id:req.params.userId})
        .select("-__v")
        .populate("friends")
        .populate("thoughts")
        .then((results)=>{
            res.json(results)
        
        }).catch((err)=>res.status(500).json(err));
    },
    createUser(req,res){
        User.create(req.body)
        .then((data)=>res.json(data))
        .catch((err)=> res.status(500).json(err));
    }
  };
  
  // GET a single user by its _id and populated thought and friend data
  
  // POST a new user:
  
  // // example data
  // {
  //   "username": "lernantino",
  //   "email": "lernantino@gmail.com"
  // }
  
  // PUT to update a user by its _id
  
  // DELETE to remove user by its _id
  