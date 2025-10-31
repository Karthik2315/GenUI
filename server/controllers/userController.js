import userModel from "../models/UserModal";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const jwtToken = (payload) => {
  return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'});
}

export const login = async(req,res) => {
  try {
    const {password,email} = req.body;
    const user = await userModel.findOne({email});
    if(!user)
    {
      return res.status(400).json({
        success:false,
        message:"User does not exist"
      });
    }
    const verify = await bcrypt.compare(password,user.password);
    if(!verify)
    {
      return res.status(400).json({
        success:false,
        message:"Invalid Credentials"
      })
    }
    res.cookie("token",jwtToken(user._id),{
      httpOnly:true,
      secure:false,
      maxAge:24*60*60*1000
    })
    return res.status(200).json({
      success:true,
      message:"User Logged in"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export const register = async(req,res) => {
  try {
    const {fullName,password,email} = req.body;
    const user = await userModel.findOne({email});
    if(user)
    {
      return res.status(400).json({
        success:false,
        message:"User already exist"
      });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newuser = new userModel({
      name:fullName,
      email:email,
      password:hashedPassword
    });
    await newuser.save();
    res.cookie("token",jwtToken(newuser._id),{
      httpOnly:true,
      secure:false,
      maxAge:24*60*60*1000
    })
    return res.status(200).json({
      success:true,
      message:"User created"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export const logout = async(req,res) => {
  try {
    res.clearCookie("token",{
      httpOnly:true,
      secure:false
    });
    return res.status(200).json({
      success:true,
      message:"Successfully Logout"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"server error"
    });
  }
}