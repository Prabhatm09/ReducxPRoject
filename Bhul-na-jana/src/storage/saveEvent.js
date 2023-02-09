const saveEvent = (event_data) => {
    let events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(event_data);
    localStorage.setItem('events', JSON.stringify(events))
}

export default saveEvent