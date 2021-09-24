import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "styles/global"
import theme from "styles/theme"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Head>
      <title>Student Panel</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;600&family=Roboto&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
