/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'

import Switch from '../../components/Switch'

export default function NewsletterStates() {
  const [daily, setDaily] = useState(false)
  const [weekly, setWeekly] = useState(false)
  const [monthly, setMonthly] = useState(false)

  return (
    <div>
      <h1>Opt-in for Newsletter</h1>
      <div>
        <Switch
          id="daily"
          checked={daily}
          onChange={setDaily}
        />
        <label>Daily Briefs</label>
      </div>
      <div>
        <Switch
          id="weekly"
          checked={weekly}
          onChange={setWeekly}

        />
        <label>Weekly Summary</label>
      </div>

      <div>
        <Switch
          id="monthly"
          checked={monthly}
          onChange={setMonthly}
        />
        <label>Monthly Digest</label>
      </div>
      <div>
        <h2>States</h2>
        <p>
          Daily:
          {String(daily)}
        </p>
        <p>
          Weekly:
          {String(weekly)}
        </p>
        <p>
          Monthly:
          {String(monthly)}
        </p>
      </div>
    </div>
  )
}
