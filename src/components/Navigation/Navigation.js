/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import styles from './sideBarMenu.css';

import Link from '../Link';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';




class Navigation extends React.Component {
  render() {
    return (

        <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
            <Nav id='dashboard'>

                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>

                <NavText> Sales </NavText>
            </Nav>
               <Nav id='dashboard'>

                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>

                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>

    );
  }
}

export default withStyles(styles)(Navigation);
