import React from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/event-search';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
