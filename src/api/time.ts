import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fetch from "node-fetch"

export default (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  const url =
    "https://a.klaviyo.com/api/v2/list/XHxPC4/subscribe?api_key=pk_6977d22a8a606ca7e2665329e62f65472b"
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"profiles":[{"email":"george.washington6@klaviyo.com"}]}',
  }
  fetch(url, options)
    .then(response => console.log(response))
    .then(error => console.log(error))

  res.json({ time: Date.now() })
}
