import React, { useEffect, useState } from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';

import './styles.css';
import api from '../../services/api';

interface channel {
  id: string
  users: any[] 
  createdAt: string 
}

interface User {
  id: string 
  urlImage: string
  username: string
  email: string
  password: string
  channels: Array<channel>
}



const HomePage: React.FC = () => {
  const [userCurrent, setUserCurrent] = useState({} as User) 
  
  useEffect(() => {
    const currentUser = async () => {
      const response = await api.get('/user')
      const { data } = response
       
      setUserCurrent(data.user)
    }

    currentUser()
  }, [])
  
  const filterUserDiferentInChannel = (channel: channel) => {
    const user = channel.users.filter((userChannel) => userChannel.id !== userCurrent.id)
    return user[0];
  }

  const renderChannel = (channel: channel, index: number) => {
    const diferentUserInfo = filterUserDiferentInChannel(channel)
    return <Contact  
    createdAt={channel.createdAt}
      key={index} 
      name={diferentUserInfo.username} 
      id={channel.id}/>
  }

  return (
    <div className="home-page">
     <Header />
     <h1 className="contacts-title">Pessoas que você ja conversou</h1>
     <ul className="contacts">
       {userCurrent.channels ? userCurrent.channels.map(renderChannel) : "nada por aqui"}
     </ul>
    </div>
  )
}

export default HomePage;