import React from 'react'
import { Provider } from 'react-redux'
import { AppNavigation } from './route'
import { store } from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        )
    }
}

export default App