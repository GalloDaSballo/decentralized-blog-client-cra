import { Route, Switch } from 'react-router-dom'
import IpfsRouter from 'ipfs-react-router'
import HomePage from "./components/pages/HomePage"
import SinglePost from "./components/pages/SinglePost"

function App() {
  return (
    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:id" component={SinglePost} />
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
      </IpfsRouter>
    </div>
  )
}
 
export default App