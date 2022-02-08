export const getStringFromDate = (dataObj) => {
  const opt = {
    day: "numeric",
    month: "long",
  };
  const dayAndMonth = new Intl.DateTimeFormat("ru-RU", opt).format(dataObj);
  const year = dataObj.getFullYear();

  return `${dayAndMonth} ${year}`;
};
