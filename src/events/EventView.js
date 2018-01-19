import React from 'react';

const EventView = ({ event}) => {
  const {title, date} = event;
  return (
    <div>
      <div>title: {title}</div>
      <div>date: {date}</div>
    </div>
  )
};

export default EventView;
