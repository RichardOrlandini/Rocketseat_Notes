import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';
const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, senha }){
    try {
      const response = await api.post("/login", { email, senha});
      //console.log(response + " " + ' RESPONSEEE')
      const { user, token } = response.data;

      localStorage.setItem("@suplament:user", JSON.stringify(user));
      localStorage.setItem("@suplament:token", token.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({token, user});
    }catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@suplament:token");
    localStorage.removeItem("@suplament:user");
    setData({});
  }

  useEffect(() =>{ 
    const token = localStorage.getItem("@suplament:token");
    const user = localStorage.getItem("@suplament:user");
    if (token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      //updateProfile,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}
export {AuthProvider, useAuth};