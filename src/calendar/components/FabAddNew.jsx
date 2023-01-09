import { addHours } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const dispatch = useDispatch();

  const handleClickNew = () => {
    setActiveEvent({
      title: " ",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "diego",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plu s">+</i>
    </button>
  );
};
