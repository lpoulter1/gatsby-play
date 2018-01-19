import React from 'react';
import { Component } from 'react';
import EventsList from './EventsList';

export default class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  getEvents() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://alwaysberunning.net/api/tournaments/results';
    const url = `${proxyUrl}${targetUrl}`;
    return fetch(url)
      .then(res => res.json())
      .then(events => this.setState({ loading: false, events }))
      .catch(error => this.setState({loading: false, error }))
  }

  componentDidMount() {
    this.getEvents()
  }

  render() {
    return (
      <EventsList {...this.state} />
    )
  }
}