import React from 'react'
import Spinner from './spinner'

const withLoader = timeoutLength => WrappedComponent => {
  return class LoadingHOC extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true
      }
    }

    componentDidMount() {
      this.startTimer = Date.now()
      setTimeout(() => this.doneLoading(), timeoutLength)
    }

    doneLoading() {
      this.endTimer = Date.now()
      this.setState({ loading: false })
    }

    render() {
      const newProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      }

      return this.state.loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <WrappedComponent {...this.props} {...newProps} />
      )
    }
  }
}

const Spinny = ({ loadingTime }) => {
  return <p>Loading time {loadingTime} seconds</p>
}

export default withLoader(1234)(Spinny)
