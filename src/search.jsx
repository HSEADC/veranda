import './search.css'
import React from 'react'
import * as ReactDOM from 'react-dom/client'

import S_SeachContent from './components/S_SeachContent/S_SeachContent.jsx'

console.clear()

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

const root = ReactDOM.createRoot(
  document.querySelector('.W_ContentReactModule')
)
root.render(<S_SeachContent requestText={this.props.getSearchRequest()} />)
