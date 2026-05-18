import { getCookie } from "cookies-next"
import { HYDRATE } from "next-redux-wrapper"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { JwtTokens, Login, Register } from "../../types"

const BASE_URL = "http://127.0.0.1:8000/api/v1/accounts/"

export const accountsApi = createApi({
  reducerPath: "accountsApi",
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      // cookies-next автоматически ищет куки в браузере.
      // На сервере он сработает, если вызов происходит внутри getServerSideProps контекста.
      const token = getCookie("access")

      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: build => ({
    register: build.mutation<any, Register>({
      query: ({ username, email, password }) => ({
        url: "register/",
        method: "POST",
        body: { username, email, password },
      }),
    }),
    login: build.mutation<JwtTokens, Login>({
      query: ({ username, password }) => ({
        url: "login/",
        method: "POST",
        body: { username, password },
      }),
    }),
    retrieveProfile: build.query<any, Register>({
      query: (token) => ({
        url: "profile/",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }),
    }),
    resetPassword: build.mutation<string, any>({
      query: (email) => ({
        url: "reset-password/",
        method: "POST",
        body: { email }
      }),
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyRetrieveProfileQuery,
} = accountsApi
