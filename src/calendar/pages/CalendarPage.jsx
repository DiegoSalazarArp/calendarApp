import { Navbar } from "../components/Navbar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar } from "react-big-calendar";
import { localizer, getMessagesEs } from "../../helpers/";
import { addHours } from "date-fns";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore, useCalendarStore } from "../../hooks";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete} from '../components/FabDelete'


export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();
  
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };
  const onSelect = (event) => {
    setActiveEvent(event)
  };
  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
  };
  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
      <CalendarModal />
      <FabAddNew/>
      <FabDelete/>
    </>
  );
};