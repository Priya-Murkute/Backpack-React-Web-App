import React, { useState } from 'react';

import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const formatMonth = (date) =>
  date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

const formatDateFull = (date) =>
  date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', nameNarrow: 'S', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', nameNarrow: 'M', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', nameNarrow: 'T', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', nameNarrow: 'W', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', nameNarrow: 'T', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', nameNarrow: 'F', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', nameNarrow: 'S', index: 6, isWeekend: true },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleContinue = () => {
    if (!selectedDate) {
      alert('Please choose a flight date first.');
      return;
    }
    alert(`Continuing with selected date: ${formatDateFull(selectedDate)}`);
  };

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText
            tagName="h1"
            textStyle="xxl"
            className={getClassName('App__heading')}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName('App__main')}>
        <BpkCalendar
          id="flight-calendar"
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          changeMonthLabel="Change month"
          previousMonthLabel="Previous month"
          nextMonthLabel="Next month"
          onDateSelect={(date) => setSelectedDate(date)}
          selectionConfiguration={{
            type: CALENDAR_SELECTION_TYPE.single,
            date: selectedDate,
          }}
        />

        <div className={getClassName('App__continue')}>
          <BpkButton onClick={handleContinue}>Continue</BpkButton>
        </div>
      </main>
    </div>
  );
};

export default App;