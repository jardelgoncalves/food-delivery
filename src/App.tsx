import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';
import store from 'store';

import Routes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
