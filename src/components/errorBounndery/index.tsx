/* eslint-disable no-unused-vars */
import React from 'react';
import SomethingWentWrong from '../pageAndPermissionNotFound/somthingWentWrong';

interface PropsInterface {
  children: React.ReactNode;
}
interface StateInterface {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  PropsInterface,
  StateInterface
> {
  constructor(props: PropsInterface | Readonly<PropsInterface>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
  }

  onGoBack = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <SomethingWentWrong onGoBack={this.onGoBack} />;
    }

    return children;
  }
}

export default ErrorBoundary;
