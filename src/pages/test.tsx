import * as React from "react"

export default function TestPage() {
  function useFunction() {
    fetch("/api/time")
      .then(response => response.json())
      .then(data => console.log(data.time))
  }
  return (
    <div>
      <div>Testing Gatsby Functions</div>
      <button onClick={useFunction}>Test</button>
    </div>
  )
}
