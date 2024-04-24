import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// singup code
export const signup = async(req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password,10)
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully", user:{
      _id: createdUser.id,
      fullname: createdUser.fullname,
      email: createdUser.email
    } });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "interval servar error" });
  }
};

// login code

export const login = async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "User logged in successfully", user:{
      _id: user.id,
      fullname: user.fullname,
      email: user.email
      
    } });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "interval servar error" });
  }
};
