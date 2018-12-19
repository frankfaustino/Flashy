export const getCurrent = () => (dispatch, getState) => {
  const { cards, current: { flipped, id } } = getState()
  const { answer, question } = cards[id]
  const content = flipped ? answer : question
  dispatch({ type: 'CURRENT', content })
}

export const next = () => (dispatch, getState) => {
  const { cards, current } = getState()
  let { id } = current
  if (id < cards.length - 1) {
    id += 1
    dispatch({ type: 'NEXT', id })
    dispatch(getCurrent(id))
  }
}

export const prev = () => (dispatch, getState) => {
  let { current: { id } } = getState()
  if (id > 0) {
    id -= 1
    dispatch({ type: 'PREV', id })
    dispatch(getCurrent(id))
  }
}

export const flip = () => (dispatch) => {
  dispatch({ type: 'FLIP' })
  dispatch(getCurrent())
}
