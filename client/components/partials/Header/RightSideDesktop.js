import { useState, useEffect, useRef } from 'react'
import Transition from "../../utils/Transition.js"
import { LoginButton, LoginModal } from './Login'
import { SignUpButton, SignUpModal } from './SignUp'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'
import ProfileMenuLinks from './ProfileMenuLinks'


const RightSideDesktop = () => {
  const userData = useUser()

  const [desktopProfileMenuIsOpen, setDesktopProfileMenuIsOpen] = useState(false)
  const desktopProfileMenuNode = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileMenuClick)
    document.addEventListener("keydown", handleEscClick)

    return () => {
      document.removeEventListener("mousedown", handleProfileMenuClick)
      document.removeEventListener("keydown", handleEscClick)
    }
  }, [])
  const toggleDropdown = () => {
    setDesktopProfileMenuIsOpen(!desktopProfileMenuIsOpen)
  }

  const handleProfileMenuClick = e => {
    if (userData.isAuth) {
      if (!desktopProfileMenuNode.current.contains(e.target)) {
        // outside click 
        setDesktopProfileMenuIsOpen(false)
      }
    }
  }

  const handleEscClick = e => {
    if (e.keyCode === 27) {
      setDesktopProfileMenuIsOpen(false)
    }
  }


  return (
    <>
      {
        userData.isAuth ?
          // logged in
          <div ref={desktopProfileMenuNode} className="ml-3 relative">
            <div>
              <button onClick={toggleDropdown} className="flex text-sm border-2 border-transparent rounded-full transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
            </div>
            <Transition
              show={desktopProfileMenuIsOpen}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                <div className="py-1 rounded-md bg-white shadow-xs">
                  <ProfileMenuLinks />
                </div>
              </div>
            </Transition>
          </div>
          :
          // signed out
          <div className='inline-flex items-center'>
            <span className="inline-flex">
              <LoginButton />
              <LoginModal />
            </span>
            <span className="inline-flex rounded-md shadow-sm items-center ml-2">
              <SignUpButton />
              <SignUpModal />
            </span>
          </div>
      }
    </>
  )
}

export default RightSideDesktop