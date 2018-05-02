import { UPDATE_EDITED_ARTICLE } from '@constants/actionTypes'

export const changeTextContent = row_text => ({
  type: UPDATE_EDITED_ARTICLE,
  row_text,
})