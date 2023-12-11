import React, { Fragment } from 'react';
import ApplicationRoutes from 'routes/ApplicationRoutes';
import { GlobalStyle } from "pages/layout/components/styles";
import {NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ErrorBoundary from 'pages/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <GlobalStyle />
            <ApplicationRoutes />
            <NotificationContainer />
        </ErrorBoundary>
    )
}

export default App;
