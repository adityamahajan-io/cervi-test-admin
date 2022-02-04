import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function UnprotectedOnlyRoute ({ component: Component, ...rest }) {

  // Add your own authentication on the below line.
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const loaded = useSelector(state=>state.auth.loaded)
  const userType = useSelector(state=>state.auth.userType)

  //console.log(isLoggedIn)

  if(loaded && isLoggedIn){
      return(
        <Redirect to={{pathname: '/'}}/>  
    )
  }
  else if (loaded && !isLoggedIn){
      return(
          <Route
            {...rest}
            render={props =>
                <Component {...props} />
            }
        />
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

