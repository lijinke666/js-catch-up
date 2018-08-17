import React from "react"
import {render} from "react-dom"
import App from "./app"

const renderApp = ( Component )=> (
  render(
    <Component/>,
    document.getElementById('root')
  )
)


renderApp(App)


