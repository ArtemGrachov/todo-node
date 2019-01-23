const User = require('../models/user.model');

exports.registration = async (req, res) => {
  if (
    req.body.username &&
    req.body.email &&
    req.body.password
  ) {

    const existingUser = await User.findOne({
      $or: [
        { username: req.body.username },
        { email: req.body.email }
      ]
    })

    if (existingUser) {
      return res
        .status(422)
        .send({message: 'User already exists'});
    }

    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    return res
      .status(201)
      .send({message: 'User succesfully created'})
  } else {
    return res.status(422);
  }
}