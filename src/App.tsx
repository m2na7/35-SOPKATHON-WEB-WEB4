import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '@styles/global';
import theme from '@styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import pageRoutes from '@routes/PageRoutes';
import { useEffect } from 'react';
function App() {
  const router = createBrowserRouter([...pageRoutes]);

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', '1');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
