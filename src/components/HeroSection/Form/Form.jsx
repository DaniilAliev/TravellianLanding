import { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
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
    display: 'none', // Убираем вертикальную палку
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '20px', // Размер шрифта 20 пикселей
    fontFamily: 'Playfair', // Шрифт Playfair
    left: 0, // Позиционируем текст у самой левой границы
    transform: 'none', // Отменяем трансформацию
    paddingLeft: 0, // Убираем внутренний отступ (padding)
  }),
}

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [leaveDate, setLeaveDate] = useState(new Date());

  return (
  <div className="search-form-container">
    <div className='flex-container'>
    <form>
      <div>
        <label><p>Destination</p></label>
        <Select options={options} className='input customSelect' styles={customStyles}/>
      </div>

      <div>
        <label><p>Person</p></label>
        <select className='select'>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
        </select>
      </div>
        
      <div>
        <label><p>Check-in</p></label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='select'/>
      </div>

      <div>
        <label><p>Check-out</p></label>
        <DatePicker selected={leaveDate} onChange={(date) => setLeaveDate(date)} className='select datepicker'/>
      </div>
    </form>

    <Button />
    </div>
  </div>)
}

export default Form;
