import React from 'react'
import { render } from 'react-dom'
require('./bootstrap')

import Router from './routers/routers'

render(<Router />, document.getElementById('app'))
