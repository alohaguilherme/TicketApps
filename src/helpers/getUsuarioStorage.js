export const getUsuarioStorage = () => {
  return {
    agent: localStorage.getItem('agent'),
    work: localStorage.getItem('work')
  }
}