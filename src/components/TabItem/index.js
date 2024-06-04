// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateState, isActive} = props
  const {displayText, tabId} = tabDetails
  const coloredClass = isActive ? 'button-color' : ''
  const colorhrLine = isActive ? 'color-line' : ''

  const onChangeStete = () => {
    updateState(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        className={`tab-button ${coloredClass}`}
        type="button"
        onClick={onChangeStete}
      >
        {displayText}
      </button>
      <hr className={`hr-line ${colorhrLine}`} />
    </li>
  )
}

export default TabItem
