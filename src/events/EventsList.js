import React from 'react';
import {component} from 'react';
import EventView from './EventView';

export default class EventsList extends React.Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    const { message } = this.props.error;
    return <div>I'm sorry! Please try again. {message}</div>;
  }

  renderEvents() {
    const { events } = this.props;
    const eventViews = events.map((event) => {
      console.log(event);
      return <EventView key={event.id} event={event} />});
    return <section>{eventViews}</section>;
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.events) {
      return this.renderEvents();
    } else {
      return this.renderError();
    }
  }
}