export default (KEY) => {
  return {
    load () {
      return JSON.parse(localStorage.getItem(KEY) || 'null')
    },
    save (data) {
      if (data) {
        localStorage.setItem(KEY, JSON.stringify(data))
      }
    }
  }
}
