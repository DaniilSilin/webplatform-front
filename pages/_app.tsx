import "@/styles/globals.css"
import { wrapper } from "../app/store"
import { Provider } from "react-redux"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore({ Component, pageProps })

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
