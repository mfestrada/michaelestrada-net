function getMotdLoginString() {
  const now = new Date();
  const daysOfWeek =
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear =
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const month = monthsOfYear[now.getUTCMonth()];
  const dayOfMonth = now.getUTCDate();
  const year = now.getUTCFullYear();
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  const timestamp = `${dayOfWeek} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds} ${year}`;
  return timestamp;
}

export function getMotd() {
  return `
Welcome to michaelestrada.net!\r
\n
 * To view my current resume, enter \`cat resume.txt\`.\r
\n
0 packages can be updated.\r
0 updates are security updates.\r
\n
Last login: ${getMotdLoginString()} from 🌎\r
`;
}
