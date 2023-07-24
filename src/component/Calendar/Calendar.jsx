// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Calendar } from 'antd';
import "./Calendar.css";
const Calendars = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div>
      <h1 className='title-calendar'>Calendar</h1>
    <Calendar onPanelChange={onPanelChange} />
    </div>
  );
};
export default Calendars;