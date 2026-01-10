const express = require("express");
const User = require("../models/User");
const router = express.Router();


router.get("/", async (req,res) => {
    const user = await User.find();
    res.json(user);

})

router.post("/", async(req,res) => {
    const newUser = new User(req.body);
    const saved = await newUser.save()
    res.json(saved)
})

module.exports  = router;
