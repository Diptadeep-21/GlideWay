import React, { Component } from 'react';

class ErrorBoundaryAdmin extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded shadow-md max-w-3xl w-full text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              An unexpected error occurred. Please try refreshing the page or contact support.
            </p>
            <button
              className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryAdmin;