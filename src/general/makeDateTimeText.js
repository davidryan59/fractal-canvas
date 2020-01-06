const makeDateTimeText = date => {
  // Change an existing date, or the date now, into
  // a string suitable for using in a filename

  const dateNow = date || new Date()
  // Mon Jan 06 2020 07:49:47 GMT+0000

  const dateNowISO = dateNow.toISOString()
  // 2020-01-06T07:49:47.773Z

  const formattedDate = dateNowISO
    .replace(/T/g, '_')
    .replace(/:/g, '-')
    .replace(/\./g, '_')
    .replace(/Z/g, '')
  // 2020-01-06_07-49-47_773

  return formattedDate
}

export default makeDateTimeText
