import { Dispatch, SetStateAction } from "react"

export interface BlogContextType {
    message: string,
    setMessage: (() => void) | Dispatch<SetStateAction<string>>
  }