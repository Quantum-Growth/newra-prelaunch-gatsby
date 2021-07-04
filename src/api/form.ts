import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fetch from "node-fetch"

export default async function formHandler(
  req: GatsbyFunctionRequest, //request object w/ some automatically parsed data
  res: GatsbyFunctionResponse //response object w/ some extra helper functions
) {
  // query strings and common body content types are automatically parsed
  // only HTTP headers prefixed with `x-gatsby-` are passed into your functions
  // `req.body` contains data from the contact form

  // Logs for Gatsby Functions
  console.log(
    `New entry: ${req.body.firstName} ${req.body.lastName} (${req.body.email})`
  )

  // API authentication details
  const LIST_ID = "XHxPC4"
  const PRIVATE_KEY = "pk_6977d22a8a606ca7e2665329e62f65472b"
  const endpoint = "https://a.klaviyo.com/api/v2/list"
  const url = `${endpoint}/${LIST_ID}/subscribe?api_key=${PRIVATE_KEY}`

  // POST data for API
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profiles: [
        {
          email: req.body.email,
          first_name: req.body.firstName,
          last_name: req.body.lastName,
        },
      ],
    }),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.status == 200) {
      // Check if subscriber already exists (i.e. returned array is empty)
      if (!data.length) {
        console.log(`    entry email is already registered`)
        res.send({ success: false, message: "email is already registered" })
      } else {
        console.log(`    entry added successfully (${data[0].id})`)
        res.send({ success: true, message: "Signed up successfully." })
      }
    } else {
      console.log("Bad response from Klaviyo.")
      console.log(data)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
    // console.log("Error", err)
  }
}
