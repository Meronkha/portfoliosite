import React, { Component } from 'react';
import '../stylesheets/Header.css'
// import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Gitlogo from '../icon/github-logo.png';
import Linked from '../icon/linkedin-logo2.png';
import codepen from '../icon/codepen2.png';

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

  fadeIn = (id) => {
    document.getElementById(id).style.opacity='1'
  }


  render () {
    const style = {
      mainDiv: {
        paddingLeft: '4.5vw',
        height: window.innerHeight,
        opacity: 0.6,
        height: 60,
        // paddingTop: "1vw",
        paddingBottom: '50',
        overflow: 'visible',
        textAlign: 'center'

      },

      Icon: {
        align: 'right',
        textAlign: 'right'
      },

      mainDivM: {
        paddingLeft: '4.5vw',
        height: window.innerHeight,
        opacity: 0.6,
        height: 60,
        marginTop: "1vw",
        paddingBottom: '50',
        overflow: 'visible',
        textAlign: 'center'

      },

      IconM: {
        align: 'right',
        textAlign: 'right'
      },


    }


    return (
        <div >

          {/*Non-Mobile devs*/}
          <MediaQuery query="(min-device-width: 650px)" style = { style.mainDiv } className = 'mainDiv'>
              {/*
              onClick={() => this.handleClick()
              */}

              <div id = 'tags'>
                    <a style = {style.Icon} href = "https://github.com/Meronkha " target="_blank">
                      <img  onLoad = {() => this.fadeIn('GitLogo')} src = {Gitlogo} id = 'GitLogo'/>
                    </a>

                    <a style = {style.Icon} href = "https://www.linkedin.com/in/meronkha" target="_blank">
                      <img onLoad = {() => this.fadeIn('linkedLogo')} src = {Linked} id = 'linkedLogo'/>
                    </a>

                    <a style = {style.Icon} href = "https://codepen.io/meronkha/" target="_blank">
                      <img onLoad = {() => this.fadeIn('codepen')} src = {codepen} id = 'codepen'/>
                    </a>


              </div>
          </MediaQuery>

          <MediaQuery query="(max-device-width: 650px)" style = { style.mainDivM } className = 'mainDivM'>
          <div style = {style.tags} id = 'tagsM'>
                <a style = {style.Icon} href = "https://github.com/Meronkha " target="_blank">
                  <img  onLoad = {() => this.fadeIn('GitLogoM')} src = {Gitlogo} id = 'GitLogoM'/>
                </a>

                <a style = {style.Icon} href = "https://www.linkedin.com/in/meronkha" target="_blank">
                  <img onLoad = {() => this.fadeIn('linkedLogoM')} src = {Linked} id = 'linkedLogoM'/>
                </a>

                <a style = {style.Icon} href = "https://codepen.io/meronkha/" target="_blank">
                  <img onLoad = {() => this.fadeIn('codepenM')} src = {codepen} id = 'codepenM'/>
                </a>


          </div>
          </MediaQuery>
        </div>
      );

  }
}

export default Header;
