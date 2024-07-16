import { MenuItem, Button } from "semantic-ui-react";

import { openModal } from "../../common/modal/modalSlice";
import { useAppDispatch } from "../../store/store";


export default function signedOutButtons() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();

  return (

    <MenuItem position='right'>
      <Button 
        basic inverted 
        content='Login' 
        onClick={ () => dispatch(openModal({type:'LoginForm'}))} />
      <Button 
        basic inverted 
        content='Register' 
        style={{ marginLeft: '0.5em' }}
        onClick={ () => dispatch(openModal({type:'RegisterForm'}))} />

    </MenuItem>
  )

}