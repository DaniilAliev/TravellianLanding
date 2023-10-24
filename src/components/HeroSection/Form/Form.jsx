import { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import styles from './Form.module.scss';

const options = [
  { value: 'Berlin', label: 'Berlin' },
  { value: 'London', label: 'London' },
  { value: 'Venice', label: 'Venice'},
  { value: 'Lisbon', label: 'Lisbon'},
  { value: 'Athens', label: 'Athens'},
  { value: 'Rome', label: 'Rome'},
  { value: 'Venice', label: 'Venice'},
  { value: 'Paris', label: 'Paris'},
  { value: 'Barcelona', label: 'Barcelona'},
  { value: 'Budapest', label: 'Budapest'},
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderBottom: `1px solid #000`,
    borderRadius: 0,
    boxShadow: state.isFocused ? '0 0 0 1px #FF7757' : 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none', 
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '20px',
    fontFamily: 'Playfair',
    left: 0, 
    transform: 'none', 
    paddingLeft: 0, 
  }),
}

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [leaveDate, setLeaveDate] = useState(new Date());

  return (
  <div className={styles["search-form-container"]}>
    <div className={styles['flex-container']}>
    <form>
      <div>
        <label><p>Destination</p></label>
        <Select options={options} className={`${styles.input} ${styles.customSelect}`} styles={customStyles}/>
      </div>

      <div>
        <label><p>Person</p></label>
        <select className={styles.select}>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
        </select>
      </div>
        
      <div>
        <label><p>Check-in</p></label>
        <div className={styles.select}>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={styles.datepicker}/>
        </div>
      </div>

      <div>
        <label><p>Check-out</p></label>
        <div className={styles.select}>
          <DatePicker selected={leaveDate} onChange={(date) => setLeaveDate(date)} className={styles.datepicker}/>
        </div>
      </div>
    </form>

    <Button />
    </div>
  </div>)
}

export default Form;
