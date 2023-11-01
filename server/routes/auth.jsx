const router = require("express").Router();
const User = require("../models/user.jsx");
const bcrypt = require("bcryptjs");

// Sign Up Functionalities
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // for hiding the password
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => res.status(200).json({ user: user }));
  } catch (err) {
    res.status(400).json({ message: "User already exist" });
  }
});

// Sign In Functionalities
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "Please Sign Up First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Incorrect Password" });
    }
    // if password is correct except it give all the documents of the user
    const { password, ...others } = user._doc;
    // gives all the documents of user
    res.status(200).json({ others });
  } catch (err) {
    res.status(400).json({ message: "User already exist" });
  }
});

module.exports = router;
