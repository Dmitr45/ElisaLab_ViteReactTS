export function Time(
  secStart: number = 0,
  deltaMin: number = 30
): {
  hoursNow: number;
  minNow: number;
  secNow: number;
  hourRevers: number;
  minRevers: number;
  secRevers: number;
} {
  // =====NOW============================================================
  const milStart = secStart * 1000;
  const msecEnd = milStart + deltaMin * 60000;
  let msecNow: number = Date.now();
  let deltaMsec = msecEnd - msecNow;

  const offset = new Date().getTimezoneOffset();
  msecNow %= 86400000;
  const hoursNow = Math.floor(msecNow / 3600000) - offset / 60;
  msecNow %= 3600000;
  const minNow = Math.floor(msecNow / 60000);
  msecNow %= 60000;
  const secNow = Math.floor(msecNow / 1000);
  // ====END===============================================================

  deltaMsec %= 86400000;
  const hourRevers = Math.floor(deltaMsec / 3600000);
  deltaMsec %= 3600000;
  const minRevers = Math.floor(deltaMsec / 60000);
  deltaMsec %= 60000;
  const secRevers = Math.floor(deltaMsec / 1000);

  return {
    hoursNow: hoursNow,
    minNow: minNow,
    secNow: secNow,
    hourRevers: hourRevers >= 0 ? hourRevers : 0,
    minRevers: minRevers >= 0 ? minRevers : 0,
    secRevers: secRevers >= 0 ? secRevers : 0,
  };
}
