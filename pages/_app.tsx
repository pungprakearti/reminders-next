import '../styles/globals.css'

type Props = {
  Component: any,
  pageProps: {}
}

function MyApp(props: Props) {
  const {
    Component, pageProps
  } = props

  return <Component {...pageProps} />
}

export default MyApp
