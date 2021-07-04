import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import Klaviyo from "node-klaviyo"

export default (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  // const KlaviyoClient = new Klaviyo({
  //   publicToken: "WsjYJT",
  //   privateToken: "pk_6977d22a8a606ca7e2665329e62f65472b",
  // })

  // KlaviyoClient.lists.addSubscribersToList({
  //   listId: "XHxPC4",
  //   profiles: [
  //     {
  //       email: "george.washington7@klaviyo.com",
  //       property1: "test",
  //     },
  //   ],
  // })
  res.json(`Email provided was: ${req.body.email}`)
}
