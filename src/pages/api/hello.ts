// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Restaurant from "../../../models/Restaurant";

type Data =
  | {
      data: string;
    }
  | {
      detail: any;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      try {
        console.log(JSON.parse(req.body));
        const restaurant = new Restaurant(JSON.parse(req.body));
        await restaurant.save();
        return res.status(200).json({ data: "Saved" });
      } catch (e) {
        return res.status(400).json({ detail: e || "something wrong" });
      }

    default:
      // throw JSON.stringify({ detail: "Method not allowed" });
      return res.status(400).json({ detail: "Method not allowed" });
  }
}
