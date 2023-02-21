import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const selectedTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClassName} onClick={selectedTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
