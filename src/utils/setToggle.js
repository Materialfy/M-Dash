
//these are nested arrow functions aka curried functions
// this passes in the state to thats gonna be changed and the payload with the data to change it
// example: set = color => return (state, newcolor) => return (state[color] = newcolor)
export const set = property => (state, data) => (state[property] = data)

export const toggle = property => state => (state[property] = !state[property])