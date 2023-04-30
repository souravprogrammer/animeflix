// import { getSession } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import axios from "axios";

export default async function Update(req, res, next) {
  const { id } = req.query;
  try {
    if (!id) throw Error("id not here");
    const session = await getServerSession(req, res, authOptions);
    if (session === null) throw Error("Not authentiacted");

    const result = await axios.post(
      process.env.API_URL + "/bookmark/" + session.user.id,
      {
        animeId: id,
      }
    );
    res.json({
      data: result.data,
    });
  } catch (err) {
    res.status(401).json({
      message: "please sighIn",
    });
  }
}
