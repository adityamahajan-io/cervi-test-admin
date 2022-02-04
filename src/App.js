import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import NavigationController from './components/NavigationController/NavigationController';
import { logIn, logOut } from './store/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const theme = createTheme({
  typography: {
      button:{
        fontFamily: "Bitter"
      }
  },
  components:{
  }
})


function App() {

  const dispatch = useDispatch()

  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const onRefresh = () => {
    var token = localStorage.getItem('accessToken')
    var userType = localStorage.getItem('userType')
    if(token!==null && userType !==null){
      dispatch(logIn({accessToken: token, userType: userType}))
    } else{
      dispatch(logOut())
    }
  }

  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)

  useEffect(()=>{
    onRefresh()
  },[])


  return (
    <div className="appContainer">
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <ThemeProvider  theme={theme}>
              <NavigationController/>
            </ThemeProvider>
          </StyledEngineProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
