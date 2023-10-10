export async function getAllEvents() {
  const res = await fetch(
    'https://nextjs-course-af4d9-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
  );
  const data = await res.json();
  return data;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event: any) => event.isFeatured);
}

export async function getEventById(id: any) {
  const allEvents = await getAllEvents();

  return allEvents.find((event: any) => event.id === id);
}

export async function getFilteredEvents(dateFilter: any) {
  const allEvents = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event: any) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
