import React, {
  useState,
  useDeferredValue,
  useEffect,
} from 'react'
import { TextField } from '@mui/material';
import type { IForm } from './form.interface';

// we can use debounce as well for more performance boost
import useDebounce from '../hook/debounce'


type Props = {
  handleChange: (key: keyof IForm) => (event: React.ChangeEvent<HTMLInputElement>, value?: any) => void,
}

const CommentBox = ({
  handleChange,
}: Props) => {
  const [text, setText] = useState('');


  // deferd value to avoid unnecessary rerender
  // const deferredText = useDeferredValue(text);
  // useEffect(() => {
  //   handleChange('other')({} as any, deferredText)
  // }
  //   , [deferredText])

  // debounce for even more performance

  const debouncedValue = useDebounce(text, 500);
  useEffect(() => {
    handleChange('other')({} as any, text)
  }
    , [debouncedValue])

  return (
    <TextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      fullWidth id="outlined-basic" variant="outlined" multiline rows={4} placeholder="Other? For example in rotations. side bends, wing stairs. when working with the arms above the head." />
  )
}

export default CommentBox