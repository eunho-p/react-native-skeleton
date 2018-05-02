import { textToMarkupConvert } from '@infra/converters'
import { UPDATE_EDITED_ARTICLE } from '@constants/actionTypes'

const init = {
  row_text: '',
  markup_text: '',
}

export default (state = init, action) => {
  switch (action.type) {
    case UPDATE_EDITED_ARTICLE:
      const { row_text } = action
      const markup_text = textToMarkupConvert(row_text)
      return { ...state, row_text, markup_text }
  }
  return state
}