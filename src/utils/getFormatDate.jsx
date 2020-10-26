const months = [
  "ЯНВАРЯ",
  "ФЕВРАЛЯ",
  "МАРТА",
  "АПРЕЛЯ",
  "МАЯ",
  "ИЮНЯ",
  "ИЮЛЯ",
  "АВГУСТА",
  "СЕНТЯБРЯ",
  "ОКТЯБРЯ",
  "НОЯБРЯ",
  "ДЕКАБРЯ",
];

const getFormatDate = (date) => {
  const formatDate = date.split("-").reverse();

  return `${formatDate[0]} ${months[formatDate[1] - 1]} ${formatDate[2]}`;
};

export default getFormatDate;
