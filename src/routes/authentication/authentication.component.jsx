import SignUp from '../sign-up-form/sign-up.component.jsx';
import SignIn from '../sign-in-form/sign-in.component.jsx';
import './authentication.styles.scss'

function Authentication () {
  return (
    <div className='authentication-container'>
      <div className='signin'>
      <SignIn />
      </div>
      <hr />
      <div className='signup'>
      <SignUp />
      </div>
    </div>
  )
}

export default Authentication
