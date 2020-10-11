import React, {useState, FormEvent} from 'react';
import Form from '../../components/Form';
import FormText from '../../components/FormText';
import Input from '../../components/Input';

import './styles.css';
import api from '../../services/api';
import { Login } from '../../services/auth';
import { useHistory } from 'react-router-dom';

const LogonPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await api.post('/auth/logon', { email, password })
      const { data } = response

      Login(data.token)
      history.push('/home')
    } catch (err) {
      alert('algum erro ocorreu')
      console.warn(err.message);
    }
  }
  return (
    <div className="logon-page">
      <Form>
        <FormText 
          title="Chatify"
          text="Faça seu login"
        />
        <Input 
          name="Email"
          label="email"
          autoComplete="off"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
         <Input 
          name="Password"
          label="password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
      </Form>
    </div>
  )
}

export default LogonPage;