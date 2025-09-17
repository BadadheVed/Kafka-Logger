import { db } from "../prisma/client.js";
import { producers } from "../kafka/producer.js";
export const Signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await db.user.create({
      data: {
        email,
        password,
      },
    });
    producers(false);
    return res.status(201).json(newUser);
    // callin thw kafka producer
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    producers(true); //calliing the kafka producer
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const HitReq = async (req, res) => {
  try {
    const id = req.params;
    const isUser = await db.user.findFirst({
      where: {
        id: id,
      },
    });
    let contains = true;
    if (!isUser) {
      contains = false;
    }
    await producers(contains);
    await res.json({ message: "The request hitted Succesfully" });
  } catch (error) {}
};
