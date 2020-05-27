export default function (name) {
  const id = name.split(' ').join('-').toLowerCase()
  return id
}
