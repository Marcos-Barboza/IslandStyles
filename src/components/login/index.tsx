import { SFC } from 'react'
import Login from './login'
import 'src/styles/login/main.css'

const indexLogin: SFC = () => {
    return (
      <div className="rootLogin">
        <Login />
      </div>
    )
}

export default indexLogin
