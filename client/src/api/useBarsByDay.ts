import React from "react"

export const useBarsByDay = (days: string) => {
  const [response, setResponse] = React.useState([])
  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/8.6.1" },
  }

  fetch(`http://localhost:3000/api/bars/days/${days}`, options)
    .then((response) => response.json())
    .then((response) => setResponse(response))
    .catch((err) => console.error(err))

  return response
}
