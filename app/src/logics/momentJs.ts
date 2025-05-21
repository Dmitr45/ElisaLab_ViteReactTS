import moment from "moment";

export function TimestampToLine(timstamp: any) {
  const date = moment
    .unix(Number(timstamp.seconds))
    .format("DD.MM.YYYY HH:mm:ss");
  return date;
}
