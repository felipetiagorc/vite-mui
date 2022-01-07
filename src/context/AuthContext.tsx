import { createContext } from 'react'

interface AuthContextState {
  token: string
}
const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider: React.FC = ({ children }) => {
  return <AuthContext.Provider value={{ token: '755555' }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
