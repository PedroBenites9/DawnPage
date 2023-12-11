import React, { Component } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { ROUTES } from "routes/ApplicationRoutes";

const ErrorManager = ({ hasError, onErrorManaged, children }) => {
    const history = useHistory();
    useEffect(() => {
        if (hasError) {
            history.replace(ROUTES.error)
            onErrorManaged();
        }
    }, [hasError])
  return children;
};

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(e) {
    console.error("HUBO UN ERROR");
    console.error(e);
    this.setState({ hasError: true })
  }
  render() {
    return (
      <ErrorManager hasError={this.state.hasError} onErrorManaged={() => this.setState({ hasError: false })}>
        {this.props.children}
      </ErrorManager>
    );
  }
}

export default ErrorBoundary;
