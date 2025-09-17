import { db } from '../prisma/client.js';

export const Signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await db.user.create({
      data: {
        email,
        password, 
      },
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const HitReq = async(req,res)=>{
try {
    // calculate the function here that is the producer.js
    res.json({message:"The request hitted Succesfully"})
} catch (error) {
    
}
}

