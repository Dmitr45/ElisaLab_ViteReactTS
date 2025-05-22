export const optionsDate = {
  //weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "UTC",
};

export function TimestampToLine(timstamp: any, options = optionsDate) {
  if (!timstamp) {
    return "";
  } else if (timstamp.seconds !== undefined) {
    const date = new Date(timstamp.seconds * 1000).toLocaleString(
      "en-US",
      //@ts-expect-error &&&
      options
    );
    return date;
  }
}
