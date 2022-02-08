import { getStringFromDate } from "./helper";

const Hello = (props) => {
  const dateString = getStringFromDate(props.date);
  return (
    <>
      <p>
        Привет <b>{props.name}</b>
      </p>
      <p>Дата регистрации: {dateString}</p>
    </>
  );
};

export default Hello;
