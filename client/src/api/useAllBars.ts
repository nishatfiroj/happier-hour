import React from "react"

export const useAllBars = () => {
  const [response, setResponse] = React.useState([])
  const options = { method: "GET", headers: { "User-Agent": "insomnia/8.6.1" } }

  fetch("http://localhost:3000/api/bars", options)
    .then((response) => response.json())
    .then((response) => setResponse(response))
    .catch((err) => console.error(err))

  return response
}
