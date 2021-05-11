/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

import './styled.css'

const Switch = ({
  id,
  name,
  checked,
  onChange,
}) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return
    e.preventDefault()
    onChange(!checked)
  }

  return (
    <div className="toggle-switch small-switch">
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={1}
          onKeyDown={e => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className="toggle-switch-inner"
            tabIndex={-1}
          />
          <span
            className="toggle-switch-switch"
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

export default Switch
