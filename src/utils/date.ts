export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString("default", { month: "long" })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  return `${month} ${day}, ${year}`
}

export const formatYYYYMMDD = (date: Date) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}-${month}-${day}`
}
