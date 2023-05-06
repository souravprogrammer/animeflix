// import { getSession } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import axios from "axios";

export default async function GetBookMark(req, res, next) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (session === null) throw Error("Not authentiacted");

    const result = await axios.get(
      process.env.API_URL + "/bookmark/" + session.user.id
    );
    res.json({
      data: result.data,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
}
