// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-img" alt={appName}/>
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
