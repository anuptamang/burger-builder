import React from 'react'
// import Header from './Header'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import classes from './Layout.module.css'

const layout = (props) => (
  <>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout