import React, { Component } from 'react';
import '../stylesheets/Header.css'
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Gitlogo from '../icon/github-logo2.png';
import Linked from '../icon/linkedin-logo2.png';

// import Grid from '@material-ui/core/Grid';
// import Media from 'react-media';

class Header extends Component {
  state = {
    show: false
  };

  handleClick = () => {
    console.log('They pressed on',this);
  };

  toggleOpen = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
    console.log('changed the state')};

  render () {
    const style = {
      mainDiv: {
        // backgroundSize: 'cover',
        height: 'auto',
        opacity: 0.6,
        height: 60,
        // width: window.innerWidth,
        // margin: 5,
        paddingBottom: '50',
        overflow: 'visible',
        align: 'pullRight',
        textAlign: 'right'

      },

      tags: {
        align: 'pullRight',
        textAlign: 'right',
        marginTop: -20,
        // marginRight: 14,
        paddingLeft: '78vw',
        top: 0,
        // right: 10,
      },

      mainIcon: {
        color: 'black'

      },

      NavHeader: {
        color: 'black',
        fontSize: '3vw',
        fontFamily: 'Monda',
        fontWeight: 'bold',
        // display:"flex",
        marginLeft: -8,
        marginBottom: -50,
        marginTop: -30,
        padding: 5,
        textDecoration: 'none',

      },

      Nav: {
        flexDirection:"column",
        marginLeft: 0,
        align: 'Left',
        // margin: '2',
        marginLeft: 0,
        display: 'flex'

      },

      NavItems: {
        fontSize: '1.6vw',
        color: 'black',
        fontFamily: 'Monda',
        fontWeight: 'bold',
        flexDirection:"column",
        marginLeft: -30,
        // display: "flex",
        align: 'Left',
      },

      MobileDrop: {
        align: 'center',
        textAlign: 'right',
        // paddingLeft: window.innerWidth - 290,
        paddingTop: 14,

        flexDirection:"Column",
        display:"flex"

      },

      MobileNavHeader: {
        color: 'white',
        fontSize: '5vw',
        fontFamily: 'Monda',
        fontWeight: 'bold',
        display:"flex",
        marginLeft: -5,
        marginBottom: -8,
        marginRight: window.innerWidth/6,
        textDecoration: 'none',

      },

      Icon: {
        align: 'right',
        textAlign: 'right'
      }
    }


    return (
        <div >

          {/*Non-Mobile devs*/}
          <MediaQuery query="(min-device-width: 790px)" style = { style.mainDiv } className = 'mainDiv'>
              {/*
              <Navbar className = 'navBar'>
                // <Navbar.Header style = { style.NavHeader}>
                //
                //   <Navbar.Brand>
                //     <a href = "/" id = 'myName' style = { style.NavHeader }> OMER KHAN</a>
                //   </Navbar.Brand>
                //
                // </Navbar.Header>
              </Navbar>
              */}
              <Navbar style = { style.mainDiv }>
                <Nav style={style.Nav} className = 'navBar-nav'>

                  <Nav onClick={() => this.handleClick()}  pullRight>
                    <NavItem eventKey={3} title= {<Glyphicon glyph="glyphicon glyphicon-user" />} style = {style.mainIcon} id="">

                    </NavItem>

                    {/*
                    <NavItem onClick={() => this.handleClick()} eventKey={1}href="#" id = 'NavItem'>
                    <div style = {style.NavItems}>BLOG</div>
                    </NavItem>

                    <NavItem onClick={() => this.handleClick()} eventKey={2}href="#" id = 'NavItem'>
                    <div style = {style.NavItems}>CONTACT</div>
                    </NavItem>
                    */}

                  </Nav>
                </Nav>
              </Navbar>
              <div style = {style.tags} id = 'tags'>
                    <a style = {style.Icon} href = "https://github.com/Meronkha">
                      <img  src = {Gitlogo} id = 'gitLogo'/>
                    </a>

                    <a style = {style.Icon} href = "https://www.linkedin.com/in/meronkha">
                      <img  src = {Linked} id = 'linkedLogo'/>
                    </a>


              </div>
          </MediaQuery>

          {/*Mobile devs*/}
          <MediaQuery query="(max-device-width: 780px)" style = { style.mainDiv } className = 'mainDiv'>

            <Navbar style = { style.mainDiv }>
            <Nav style={style.Nav} className = 'navBar-nav'>

            <Nav onClick={() => this.handleClick()}  pullRight>
            <NavItem eventKey={3} title= {<Glyphicon glyph="glyphicon glyphicon-user" />} style = {style.mainIcon} id="">

            </NavItem>
            </Nav>
            </Nav>

            </Navbar>
            <div style = {style.tags} id = 'tags'>
            <a style = {style.Icon} href = "https://github.com/Meronkha">
            <img  src = {Gitlogo} id = 'gitLogo'/>
            </a>

            <a style = {style.Icon} href = "https://www.linkedin.com/in/meronkha">
            <img  src = {Linked} id = 'linkedLogo'/>
            </a>


            </div>
          </MediaQuery>
        </div>
      );

  }
}

export default Header;
