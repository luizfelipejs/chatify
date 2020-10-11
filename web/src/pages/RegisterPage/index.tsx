import React, {useState, FormEvent} from 'react';
import Form from '../../components/Form';
import FormText from '../../components/FormText';
import Input from '../../components/Input';
import api from '../../services/api'

import './styles.css';
import { useHistory } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await api.post("/user", {username, urlImage, email, password});
      history.push('/login')
      alert('cadastro realizado')
    } catch (error) {
      alert('Algum erro ocorreu')
      console.warn(error.message)
    }
  }

  return (
    <div className="register-page">
      <Form>
        <FormText 
          title="Chatify"
          text="Faça seu cadastro"
        />
        <Input 
          name="nome de usuario"
          label="username"
          autoComplete="off"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input 
          name="link de uma foto sua"
          label="url-image"
          autoComplete="off"
          value={urlImage}
          onChange={e => setUrlImage(e.target.value)}
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
          name="Senha"
          label="senha"
          autoComplete="off"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="submit" type="submit" onClick={handleRegister}>
          Login
        </button>
      </Form>
    </div>
  )
}

export default RegisterPage;