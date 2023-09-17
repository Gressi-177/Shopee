export interface SuccessApi<Data> {
  message: string
  data: Data
}

export interface ErrorApi<Data> {
  message: string
  data?: Data
}
