import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default async function formHandler(
  req: GatsbyFunctionRequest, //request object w/ some automatically parsed data
  res: GatsbyFunctionResponse //response object w/ some extra helper functions
) {
  // query strings and common body content types are automatically parsed
  // only HTTP headers prefixed with `x-gatsby-` are passed into your functions
  // `req.body` contains data from a contact form
  console.log("submitted form", req.body)
  res.json(`ok`)
  // if (req.method === "POST") {
  //   res.send("This is POST")
  //   // POST data to authenticated API
  //   const email = ""
  //   const first_name = ""
  //   const last_name = ""
  //   const LIST_ID = ""
  //   const PRIVATE_KEY = ""

  //   const endpoint = "https://a.klaviyo.com/api/v2/list"
  //   const url = `${endpoint}/${LIST_ID}/subscribe?api_key=${PRIVATE_KEY}`

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       profiles: [
  //         {
  //           email: { email },
  //           first_name: { first_name },
  //           last_name: { last_name },
  //         },
  //       ],
  //     }),
  //   }

  //   try {
  //     const result = await fetch(url, options)
  //     res.send(result)
  //   } catch (error) {
  //     res.status(500).send(error)
  //   }
  // } else {
  //   res.send("This is not POST")
  // }
}
