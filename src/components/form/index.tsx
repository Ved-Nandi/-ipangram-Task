import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup, Checkbox } from '@mui/material';
import CommentBox from './commentBox';
import useDebounce from '../hook/debounce';
import { IForm } from './form.interface';

export type {
  IForm,
};

type Props = {
  data: IForm,
  formData: IForm[],
  setFormData: React.Dispatch<React.SetStateAction<IForm[]>>,
  index: number
}

export const IFormData = {
  diagnosed_with_problem: '',
  physical_trauma_start_after: '',
  mental_trauma_start_after: '',
  how_often_do_you_experi_problem: '',
  notRelevent: false,
  whenLyingDown: false,
  whenSitting: false,
  whenStanding: false,
  whenWalking: false,
  other: '',
  how_intensive_is_the_experience: '',
  id: 0,
}

const Form = ({
  data,
  setFormData,
  formData,
  index,
}: Props) => {

  const [tempFormData, setTempFormData] = useState<IForm>(structuredClone(data));
  const debouncedTempFormData = useDebounce(tempFormData, 500);
  useEffect(() => {
    setFormData((prevState) => {
      const newFormData = structuredClone(prevState);
      newFormData[index] = structuredClone(debouncedTempFormData);
      return structuredClone(newFormData);
    })

  }, [debouncedTempFormData])

  const handleChange = (key: keyof IForm) => (event: React.ChangeEvent<HTMLInputElement>, value?: any) => {

    setTempFormData((prevState) => ({
      ...prevState,
      [key]: value ?? event.target.value
    }))

  }

  return (
    <div
      style={{
        marginTop: '1rem'
      }}
    >
      <div style={{ maxWidth: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Have you been diagnosed with this problem?</FormLabel>
          <RadioGroup
            row

            name="row-radio-buttons-group"
            value={tempFormData.diagnosed_with_problem}
            onChange={handleChange('diagnosed_with_problem')}
          >
            <FormControlLabel value="Not relevent" control={<Radio />} label="Not relevent " />
            <FormControlLabel value="Yes" control={<Radio />} label="yes" />
            <FormControlLabel value="NO" control={<Radio />} label="No" />

          </RadioGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Did the problem start after a physical trauma?</FormLabel>
          <RadioGroup
            row

            name="row-radio-buttons-group"
            value={tempFormData.physical_trauma_start_after}
            onChange={handleChange('physical_trauma_start_after')}
          >
            <FormControlLabel value="Not relevent" control={<Radio />} label="Not relevent " />
            <FormControlLabel value="Yes" control={<Radio />} label="yes" />
            <FormControlLabel value="NO" control={<Radio />} label="No" />

          </RadioGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Did the problem start after a mental trauma?</FormLabel>
          <RadioGroup
            row

            name="row-radio-buttons-group"
            value={tempFormData.mental_trauma_start_after}
            onChange={handleChange('mental_trauma_start_after')}
          >
            <FormControlLabel value="Not relevent" control={<Radio />} label="Not relevent " />
            <FormControlLabel value="Yes" control={<Radio />} label="yes" />
            <FormControlLabel value="NO" control={<Radio />} label="No" />

          </RadioGroup>
        </div>
        <div style={{ marginBottom: '1rem' }} >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">How often do you experience the problem?</FormLabel>
            <RadioGroup
              row

              name="row-radio-buttons-group"
              value={tempFormData.how_often_do_you_experi_problem}
              onChange={handleChange('how_often_do_you_experi_problem')}
            >
              <FormControlLabel value="female" control={<Radio />} label="Not relevent" />
              <FormControlLabel value="male" control={<Radio />} label="Daily" />
              <FormControlLabel value="SeverlsTime" control={<Radio />} label="Severls time/week" />
              <FormControlLabel value="feviewMonth" control={<Radio />} label="Feview times/month" />
              <FormControlLabel value="feviewYear" control={<Radio />} label="Feview times/year" />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem'
          }}
        >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">When do u experiance the probem?</FormLabel>
            <FormGroup
            >
              <FormControlLabel control={<Checkbox
                checked={tempFormData.notRelevent}
                onChange={handleChange('notRelevent')}
                value="notRelevent"
              />} label="Not relevent" />
              <FormControlLabel control={<Checkbox
                checked={tempFormData.whenLyingDown}
                value="whenLyingDown"
                onChange={handleChange('whenLyingDown')}
              />} label="when laying down" />
              <FormControlLabel control={<Checkbox
                checked={tempFormData.whenSitting}
                value="whenSitting"
                onChange={handleChange('whenSitting')}
              />} label="When sitting" />
              <FormControlLabel control={<Checkbox
                checked={tempFormData.whenStanding}
                value="whenStanding"
                onChange={handleChange('whenStanding')}
              />} label="under standing" />
              <FormControlLabel control={<Checkbox
                checked={tempFormData.whenWalking}
                value="whenWalking"
                onChange={handleChange('whenWalking')}
              />} label="in walking" />
            </FormGroup>
          </FormControl>
          <div style={{ flexGrow: 1, marginTop: '3rem' }}>
            <CommentBox handleChange={handleChange} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '1rem' }} >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">How often do you experience the problem?</FormLabel>
              <RadioGroup
                row

                name="row-radio-buttons-group"
                value={tempFormData.how_often_do_you_experi_problem}
                onChange={handleChange('how_often_do_you_experi_problem')}
              >
                <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" />
                <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" />
                <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="3" />
                <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="4" />
                <FormControlLabel labelPlacement='top' value="5" control={<Radio />} label="5" />
                <FormControlLabel labelPlacement='top' value="6" control={<Radio />} label="6" />
                <FormControlLabel labelPlacement='top' value="7" control={<Radio />} label="7" />
                <FormControlLabel labelPlacement='top' value="8" control={<Radio />} label="8" />
                <FormControlLabel labelPlacement='top' value="9" control={<Radio />} label="9" />
                <FormControlLabel labelPlacement='top' value="10" control={<Radio />} label="10" />

              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form