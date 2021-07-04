import React from "react"

// This Gatsby page is a React component
export default function TestPage() {
  // React hook for storing the state of the form
  const [value, setValue] = React.useState({})

  /**
   * Listen to form changes and save them in the state
   */
  function handleChange(event) {
    value[event.target.id] = event.target.value
    setValue({ ...value })
  }

  /**
   * Submit form data to Klaviyo
   */
  function handleSubmit(event) {
    event.preventDefault() // stops page from reloading on submit
    console.log("Submitting form...")
    console.log(JSON.stringify(value))
    // subscribeToKlaviyo()
    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(body => {
        console.log(`response from API:`, body.message)
      })
  }

  return (
    <div>
      <div>Testing Gatsby Functions</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          placeholder="first name"
          onChange={handleChange} //update state on user input
          value={value["firstName"] || ""} //keep input up to date with state
        />
        <input
          type="text"
          id="lastName"
          placeholder="last name"
          onChange={handleChange} //update state on user input
          value={value["lastName"] || ""} //keep input up to date with state
        />
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={handleChange} //update state on user input
          value={value["email"] || ""} //keep input up to date with state
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// Send form state to a function
// Add robust validation
