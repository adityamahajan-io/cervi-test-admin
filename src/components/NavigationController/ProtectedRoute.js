import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'


export default function ProtectedRoute ({ component: Component, ...rest }) {


  // Add your own authentication on the below line.
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const loaded = useSelector(state=>state.auth.loaded)

  if(loaded && isLoggedIn){

    return(
    <Route
        {...rest}
        render={props =>
            <Component {...props} />
        }
    />
    )
  }
  else if (loaded && !isLoggedIn){
      return(
          <Redirect to={{pathname: '/login'}}/>
      )
  }
  else{
      return(
          <div>
              AUTHENTICATION FAILED
          </div>
      )
  }

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isLoggedIn ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       }
//     />
//   )
}

