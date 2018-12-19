import cards from './data.json'

const initialState = {
  cards,
  current: {
    id: 0,
    flipped: false,
    content: '',
    type: '',
    set: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT':
      return { ...state, current: { ...state.current, content: action.content } }
    case 'NEXT':
      return { ...state, current: { ...state.current, id: action.id } }
    case 'PREV':
      return { ...state, current: { ...state.current, id: action.id } }
    case 'FLIP':
      return { ...state, current: { ...state.current, flipped: !state.current.flipped } }
    default:
      return state
  }
}
