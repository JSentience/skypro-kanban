import { useState } from 'react';
import {
  CalendarBlock,
  CalendarCell,
  CalendarCells,
  CalendarContainer,
  CalendarContent,
  CalendarDayName,
  CalendarDaysNames,
  CalendarMonth,
  CalendarNav,
  CalendarP,
  CalendarPeriod,
  CalendarTtl,
  NavAction,
  NavActions,
} from './Calendar.styled';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const formatSelectedDate = (date) => {
  if (!date) return '';
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
};

const getDaysInMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const days = [];

  // Дни предыдущего месяца
  const prevMonth = new Date(year, month, 0);
  const prevMonthDays = prevMonth.getDate();
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, prevMonthDays - i),
    });
  }

  // Дни текущего месяца
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      isCurrentMonth: true,
      date: new Date(year, month, day),
    });
  }

  // Дни следующего месяца
  const remainingCells = 42 - days.length;
  for (let day = 1; day <= remainingCells; day++) {
    days.push({
      day,
      isCurrentMonth: false,
      date: new Date(year, month + 1, day),
    });
  }

  return days;
};

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDateClick = (dayInfo) => {
    if (dayInfo.isCurrentMonth) {
      setSelectedDate(dayInfo.date);
      if (onDateSelect) {
        onDateSelect(dayInfo.date);
      }
    }
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();

  return (
    <CalendarContainer>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </CalendarMonth>
          <NavActions>
            <NavAction onClick={handlePrevMonth} data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction onClick={handleNextMonth} data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            {daysOfWeek.map((day, index) => (
              <CalendarDayName key={index}>{day}</CalendarDayName>
            ))}
          </CalendarDaysNames>
          <CalendarCells>
            {days.map((dayInfo, index) => {
              const isToday =
                dayInfo.date.toDateString() === today.toDateString();
              const isSelected =
                selectedDate &&
                dayInfo.date.toDateString() === selectedDate.toDateString();

              return (
                <CalendarCell
                  key={index}
                  $isOtherMonth={!dayInfo.isCurrentMonth}
                  $isCellDay={dayInfo.isCurrentMonth}
                  $isActiveDay={isSelected}
                  $isCurrent={isToday}
                  onClick={() => handleDateClick(dayInfo)}
                >
                  {dayInfo.day}
                </CalendarCell>
              );
            })}
          </CalendarCells>
        </CalendarContent>

        <input
          type="hidden"
          id="datepick_value"
          value={formatSelectedDate(selectedDate)}
        />
        <CalendarPeriod>
          <CalendarP>
            {selectedDate
              ? `Срок исполнения: ${formatSelectedDate(selectedDate)}`
              : 'Выберите срок исполнения'}
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarContainer>
  );
};
export default Calendar;
