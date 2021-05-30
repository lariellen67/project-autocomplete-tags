/* eslint-disable linebreak-style */
import React from 'react'

import Timeline from '../../components/Timeline'

function TimelinePage() {
  const nodes = [
    { text: 'Started working on the app-ideas repository' },
    { text: 'Started the Weekly Coding Challenge program' },
    { text: 'Got 1.000 followers on Twitter, no limit got the masterpiece, not limit baby' },
    { text: 'I published the FreeCodeCamp Medium Publication' },
    { text: 'Over 12.000 views in a single day on my Medium posts' },
    { text: 'Started the Weekly Coding Challenge program' },
    { text: 'Got 1.000 followers on Twitter' },
    { text: 'I published the FreeCodeCamp Medium Publication' },
    { text: 'Started the Weekly Coding Challenge program' },
    { text: 'Got 1.000 followers on Twitter' },
    { text: 'I published the FreeCodeCamp Medium Publication' },
  ]
  return (
    <>
      <h1>React Timeline</h1>
      <Timeline timelineData={nodes} />
    </>
  )
}

export default TimelinePage
