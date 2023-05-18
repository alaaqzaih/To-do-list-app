import { RiCloseCircleLine } from "react-icons/ri";
// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// function Calendar(props) {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [dialogPosition, setDialogPosition] = useState({});

//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event);

//     const cellRect = clickInfo.el.getBoundingClientRect();
//     const dialogTop = cellRect.top + window.pageYOffset - 10;

//     setDialogPosition({
//       top: dialogTop,
//       left: cellRect.left + cellRect.width / 1.5,
//     });
//   };

//   const handleCloseDialog = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={props.todos.map((task) => ({
//           id: task.id,
//           description: task.description,
//           completed: task.complete,
//           title: task.text,
//           start: new Date(task.deadline).toISOString().slice(0, 10),
//         }))}
//         eventClick={handleEventClick}
//       />
//       {selectedEvent && (
//         <div
//           className="dialog"
//           style={{
//             top: dialogPosition.top,
//             left: dialogPosition.left,
//           }}
//         >
//           <div className="header-dialog">
//             <RiCloseCircleLine
//               onClick={handleCloseDialog}
//               className="delete-icon-dialog"
//             />
//             <h3>{selectedEvent.title}</h3>
//           </div>

//           <p>{selectedEvent.extendedProps.description}</p>
//           <p>
//             Completed: {selectedEvent.extendedProps.completed ? "Yes" : "No"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calendar;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar(props) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dialogPosition, setDialogPosition] = useState({});

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);

    const cellRect = clickInfo.el.getBoundingClientRect();
    const dialogTop = cellRect.top + window.pageYOffset - 10;

    setDialogPosition({
      top: dialogTop,
      left: cellRect.left + cellRect.width / 1.5,
    });
  };

  const handleCloseDialog = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={props.todos.map((task) => ({
          id: task.id,
          description: task.description,
          completed: task.complete,
          title: task.text,
          start: new Date(task.deadline).toISOString(),
        }))}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <div
          className="dialog"
          style={{
            top: dialogPosition.top,
            left: dialogPosition.left,
          }}
        >
          <div className="header-dialog">
            <RiCloseCircleLine
              onClick={handleCloseDialog}
              className="delete-icon-dialog"
            />
            <h3>{selectedEvent.title}</h3>
          </div>

          <p>{selectedEvent.extendedProps.description}</p>
          <p>
            Completed: {selectedEvent.extendedProps.completed ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Calendar;
