import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './style.scss'


library.add(fab, far, fas)

export const Card = ({ title }) => {
  return (
    <div className='card'>
      <div className="card-menu">
        <FontAwesomeIcon icon={['far', 'bookmark']}/>
        <FontAwesomeIcon icon={['fas', 'ellipsis-v']}/>
      </div>
      <span>{title}</span>
      <FontAwesomeIcon icon={['fab', 'react']}/>
      <div className="card-footer">
        <div className="card-btn">CLICK ME!<span>CLICK ME!</span></div>
      </div>
    </div>
  )
}