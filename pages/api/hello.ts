// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "~/utils/cookies";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Calling our pure function using the `res` object, it will add the `set-cookie` header
  // Add the `set-cookie` header on the main domain and expire after 30 days
  setCookie(res, "Next.js", "api-middleware!", { path: "/", maxAge: 2592000 });
  // Return the `set-cookie` header so we can display it in the browser and show that it works!

  if (res.status(200)) {
    const data = await fetch(`https://mockend.com/mockend/demo/posts`);
    const response = await data.json();
    return res.status(200).json(response), res.end(res.getHeader("Set-Cookie"));
  }
  return console.log(`ahhhhh`);
}
