import './S_SearchContent.scss'
import React from 'react'

export default class S_SearchContent extends React.Component {
  render() {
    return <div className="S_SearchContent">{this.props.requestText}</div>
  }
}
