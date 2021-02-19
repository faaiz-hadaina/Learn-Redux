export const addTodo = (name) => {
  return {
    type: 'Add_Todo',
    payload: name,
  }
}
