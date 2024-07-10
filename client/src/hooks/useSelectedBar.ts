import React from "react"

const placeholderBar = {
  _id: "663d200b02443418ed33b9a8",
  yelpId: "ePqKbqXFBCbwBaWiN2Jo9w",
  barName: "Ampersand",
  address: "294 3rd Ave, New York, NY 10010",
  googleMapsLink: "https://maps.app.goo.gl/ZyVGQxdk6o7suAuP7",
  happyHourDays: "N/A",
  happyHourHours: "N/A",
  indoor: "x",
  outdoor: "x",
  happyHourMenu: "N/A",
  latitude: 40.7386178790617,
  longitude: -73.9834206895483,
}

export const useSelectedBar = () => {
  const [selectedBar, setSelectedBar] = React.useState<BarMetadata | undefined>(
    placeholderBar
  )

  return { selectedBar, setSelectedBar }
}
