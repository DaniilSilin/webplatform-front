import React from "react"
import Header from './Header'
import Sider from './Sider'

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import KeyboardContext from "../contexts/Keyboard";

export interface Props {}

export default function MainLayout() {
  const [displayKeyboard, setDisplayKeyboard] = React.useState(false)

  const onChange = React.useCallback((input: string) => {
    console.log("Input changed", input);
  }, []);

  const onKeyPress = React.useCallback((button: string) => {
    console.log("Button pressed", button);
  }, []);

  return (
    <div>
      <KeyboardContext.Provider value={setDisplayKeyboard}>
        <Header />
        <Sider />
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
