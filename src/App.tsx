import { FC } from 'react'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
import Header from '@/components/header'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'

const GPUTema = createTheme({
  palette: {
    primary: {
      main: '#0033dd'
    },
    secondary: {
      main: '#1CADF4'
    }
  }
})

const App: FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={GPUTema}>
        <Root>
          <Header />
          <Login />
        </Root>
      </ThemeProvider>
    </AuthProvider>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
