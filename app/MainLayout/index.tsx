import React from "react"
import Header from './Header'
import Sider from './Sider'

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { useAppSelector } from "../store/hooks";
import { accountsApi } from "../store/api/accountsApi";

import KeyboardContext from "../contexts/Keyboard";

export interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  const user = useAppSelector((state) => state.djangoSlice.user);
  const { data: userProfile } = accountsApi.useRetrieveProfileQuery()
  const [displayKeyboard, setDisplayKeyboard] = React.useState(false)
  const [displaySider, setDisplaySider] = React.useState(false)

  console.log(userProfile)

  const onChange = React.useCallback((input: string) => {
    console.log("Input changed", input);
  }, []);

  const onKeyPress = React.useCallback((button: string) => {
    console.log("Button pressed", button);
  }, []);

  console.log('user');
  console.log(user);


  return (
    <div>
      <KeyboardContext.Provider value={setDisplayKeyboard}>
        {user && (
          <div>{user.username}</div>
        )}
        <Sider displaySider={displaySider} setDisplaySider={setDisplaySider} />
        <Header displaySider={displaySider} setDisplaySider={setDisplaySider} />
        {children}
        {displayKeyboard && (
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        )}
      </KeyboardContext.Provider>
    </div>
  )
}
