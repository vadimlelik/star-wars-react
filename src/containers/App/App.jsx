import {Route , BrowserRouter,Switch} from 'react-router-dom'
import routesConfig from '@routes/routesConfig'
import Header from '@components/Header'

const App = () => {

  return(   
  
  <> 

<BrowserRouter>
<Header/>

<Switch>
{routesConfig.map((route,item)=>{
    return(
      <Route 
      key={item} 
      path={route.path} 
      exact={route.exact} 
      component={route.component}/>
    )
    })}
</Switch>

      </BrowserRouter>
    </>
     

  )

}
export default App;
