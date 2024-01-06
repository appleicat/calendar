import dayjs from 'dayjs';
import { useTime } from './_time';

const Cell = ({ children, hover, now }) => {
  return (
    <div
      className={`h-full w-full flex justify-center items-center ${
        now ? 'text-5xl' : ''
      }`}
      data-hover-pointer={hover}
    >
      {children}
    </div>
  );
};

const WeekDayCell = ({ weekday, hover }) => {
  return (
    <Cell hover={hover}>
      {dayjs().day(weekday).format('ddd').toUpperCase()}
    </Cell>
  );
};

export const Calendar = () => {
  const date = useTime();
  let cells = [];
  for (let i = 0; i < 37; i++) {
    if (
      i >= dayjs(date).startOf('month').day() - 1 &&
      i < dayjs(date).daysInMonth() + dayjs(date).startOf('month').day() - 1
    ) {
      cells[i] = {
        date: dayjs(date)
          .startOf('month')
          .date(1 - dayjs(date).startOf('month').day() + 1 + i)
          .date(),
        hover: true,
        now:
          dayjs().startOf('date').unix() ===
          dayjs(date)
            .startOf('month')
            .date(1 - dayjs(date).startOf('month').day() + 1 + i)
            .startOf('date')
            .unix(),
      };
    } else {
      cells[i] = {};
    }
  }
  return (
    <section className="grid grid-cols-7 auto-rows-fr place-items-center place-content-center h-full aspect-square text-xl">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <WeekDayCell hover key={i} weekday={i} />
      ))}
      {cells.map((cell, key) => (
        <Cell
          key={key}
          {...(cell.hover === true && { hover: true })}
          {...(cell.now === true && { now: true })}
        >
          {cell.date}
        </Cell>
      ))}
      <Cell></Cell>
      <Cell hover>{dayjs().format('HH:mm')}</Cell>
      <Cell hover>{dayjs().format('D')}</Cell>
      <Cell hover>{dayjs().format('MMM').toUpperCase()}</Cell>
      <Cell hover>{dayjs().format('YYYY')}</Cell>
    </section>
  );
};
