import { Grid, TextField, FormControl } from "@mui/material"
import styles from "./page.module.css"

export default function Home() {
  const Field = ({ placeholder }: { placeholder: string }) => {
    return <TextField placeholder={placeholder}></TextField>
  }
  const Label = ({ label }: { label: string }) => {
    return <p style={{ fontSize: 14 }}>{label}</p>
  }
  return (
    <Grid padding={4}>
      <h1>add a bar!!!!!</h1>
      <FormControl>
        <Grid container flexDirection="column" gap={1}>
          <Field placeholder="name" />
          <br />
          to find the latitude and longitude, zoom in on the bar’s location on
          google maps, hold down a pin onto or very closely near the location of
          the bar, see the latitude and long, copy and paste here
          <Field placeholder="latitude" />
          <Field placeholder="longitude" />
          <br />
          here&apos;s some optional fields
          <Field placeholder="address" />
          <Field placeholder="google maps link" />
          <Field placeholder="happy hour days" />
          <Field placeholder="happy hour hours" />
          <Field placeholder="happy hour menu link" />
          <Field placeholder="happy hour menu link" />
        </Grid>
      </FormControl>
    </Grid>
  )
}

/**
 
  
  address: string
  barName: string
  googleMapsLink: string
  happyHourDays: string
  happyHourHours: string
  happyHourMenu: string
  latitude: number
  longitude: number
  indoor?: string
  outdoor?: string
  monday?: string
  tuesday?: string
  wednesday?: string
  thursday?: string
  friday?: string
 */
