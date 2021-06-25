import React from 'react';
import {Route,Redirect} from 'react-router-dom'


function SigninRoute({component: Component}{
    return(
        <Route render={props =>
          if(!localStorage.getItem('user')){
              return <Redirect to={{pathname='/signin}}
          }
        
        }
         return <Component/>
        />
    )
})

export default SigninRoute;