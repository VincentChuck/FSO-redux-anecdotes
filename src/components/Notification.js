import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  const style = {
    display: notification ? '' : 'none',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notification=== null ?
  null : (
    <div style={style}>
      {notification}
    </div>
  )
}

export default connect((state) => {
  return { notification: state.notifications }
})(Notification)