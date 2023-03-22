import { serialize } from "cookie";

export default function logoutHandler(req, res) {
  const { myTokenName } = req.cookies;
  if (!myTokenName) {
    console.log(!myTokenName);
    return res.status(204).json({ error: "Not logged in" });
  }
  console.log("Cookie que se deslogea: " + myTokenName);
  const serialized = serialize("myTokenName", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Logout successful",
  });
}