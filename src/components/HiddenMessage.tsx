import * as React from 'react'

interface Props {
  children: boolean
}

const HiddenMessage = ({ children }: Props) => {
  const [showMessage, setShowMessage] = React.useState(false)

  return (
    <div>
      <label htmlFor='toggle'>
        メッセージ：
      </label>
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      <span>{showMessage ? children : null}</span>
    </div>
  )
}

export default HiddenMessage;