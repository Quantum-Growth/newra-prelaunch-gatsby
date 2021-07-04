// Sign Up Page
import * as React from "react"

// This Gatsby page is a React component
export default function FormPage() {
  // React hook for storing the state of the form
  const [value, setValue] = React.useState({})
  const [serverResponse, setServerResponse] = React.useState(``)

  /**
   * Listen to form changes and save them in the state
   */
  function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse("")
    setValue({ ...value })
  }

  // When the form is submitted, send form values to function for processing.
  async function onSubmit(e) {
    e.preventDefault()
    const response = await window
      .fetch(`/api/form/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then(res => res.json())
    setServerResponse(response)
  }

  return (
    <div>
      <div>Server response: {serverResponse}</div>
      <form onSubmit={onSubmit} method="POST" action="/api/form">
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={handleChange} //update state on user input
          value={value["email"] || ""} //keep input up to date with state
        ></input>
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={handleChange} //update state on user input
          value={value["name"] || ""} //keep input up to date with state
        />
        <button>Submit</button>
        <input type="submit" />
      </form>
    </div>
  )
}

function addKlaviyoSubscriber({ first_name, last_name, email }) {
  const LIST_ID = "XHxPC4"
  const PRIVATE_KEY = "pk_6977d22a8a606ca7e2665329e62f65472b"

  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      profiles: [
        {
          email: { email },
          first_name: { first_name },
          last_name: { last_name },
        },
      ],
    }),
  }

  fetch(
    `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${PRIVATE_KEY}`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}
