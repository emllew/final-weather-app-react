import React from "react";

export default function DateAndTime(props) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = addZero(now.getMinutes());

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    } 
    return i;
  }

  function showDateTime() {
    return (
      <div>
        It is currently {hours}:{minutes} on {day}{" "}
      </div>
    );
  }
  return showDateTime();
}
