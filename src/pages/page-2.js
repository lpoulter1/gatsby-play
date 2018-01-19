import React from 'react'
import Link from 'gatsby-link'
import EventContainer from '../events/EventContainer';

const SecondPage = () => (
  <div>
    <EventContainer/>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default SecondPage
