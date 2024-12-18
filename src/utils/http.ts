import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthResponse } from 'src/types/auth.type'
import { clearLS, getAccessTokenFormLS, setAccessTokenToLS, setProfileToLS } from './auth'
import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from 'src/apis/auth.api'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFormLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        console.log(url)
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse

          this.accessToken = data.data.access_token
          setAccessTokenToLS(this.accessToken)
          setProfileToLS(data.data.user)
        } else if (url === URL_LOGOUT) {
          this.accessToken = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
