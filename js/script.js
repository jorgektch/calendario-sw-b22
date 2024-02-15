//import esLocale from '@fullcalendar/core/locales/es';

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.setOption('locale', 'es');
    calendar.render();
});
