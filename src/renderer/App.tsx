import { Provider } from 'react-redux';
import './App.css';
import Views from './views';
import store from './redux/store';
import { BrowserProvider } from './contexts/BrowserContext';
import ScreenRecorderContextProvider from './lib/screenRecoderContext';
import ThemeProvider from './theme';

export default function App() {
  return (
    <div className="">
      <ThemeProvider>
        <Provider store={store}>
          <BrowserProvider>
            <ScreenRecorderContextProvider>
              <Views />
            </ScreenRecorderContextProvider>
          </BrowserProvider>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
