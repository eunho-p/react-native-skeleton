import { StackNavigator } from 'react-navigation'
import MarkupConvert from '@components/markupConvert/markupConvert_component'

export const AppNavigation = StackNavigator(
  {
    MarkupConvert: {
      screen: MarkupConvert,
    }
  }, {
    initialRouteName: 'MarkupConvert',
    headerMode: 'none',
  }
)