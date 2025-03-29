import usersModels from "../models/users.models";

export async function register(req, res) {
  try {
    const data = req.body;
    const newUser = new usersModels(data);
    await newUser.save();

    res.status(201).json({ ok: true, msg: "Usuario credo correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Algo salio mal" });
  }
}

export async function getUsers(req, res) {
  try {
    const user = await usersModels.find();

    res.send.json({ ok: true, data: user });
  } catch (error) {
    res.send(error);
  }
}
