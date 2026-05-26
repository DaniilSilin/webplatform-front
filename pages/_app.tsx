import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { wrapper } from "../app/store"

// Убрали слово export отсюда
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Оставили экспорт ТОЛЬКО здесь
export default wrapper.withRedux(App)
