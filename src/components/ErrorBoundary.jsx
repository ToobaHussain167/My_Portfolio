import { Component } from 'react'

/**
  Catches render-time errors thrown
 * anywhere in its subtree (e.g. by the lazily-loaded ProjectModal) and
 * shows a graceful fallback instead of a blank white screen.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="error-fallback">
            <p>Something went wrong while rendering this section.</p>
            <button className="btn btn-secondary" onClick={this.handleReset}>
              Try again
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
