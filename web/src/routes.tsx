import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LogonPage from './pages/LogonPage'
import RegisterPage from './pages/RegisterPage'
import { isAuth } from './services/auth'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ChatPage from './pages/ChatPage'

const PrivatedRoute = ({...rest}: any) => 
  isAuth() ? (
    <Route {...rest}/>
  ) : (
    <Redirect to="/"/>
  )

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={LandingPage}/>
    <Route path="/login" component={LogonPage}/>
    <Route path="/register" component={RegisterPage}/>
    <PrivatedRoute path="/home" component={HomePage}/>
    <PrivatedRoute path="/search" component={SearchPage}/>
    <PrivatedRoute path="/chat/:id" component={ChatPage}/>
  </BrowserRouter>
)

export default Routes 