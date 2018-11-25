import React, { Component } from 'react';
import '../stylesheets/Header.css'
// import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Gitlogo from '../icon/cleanGit.png';
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
        height: window.innerHeight,
        opacity: 0.6,
        height: 60,
        paddingBottom: '50',
        overflow: 'visible',
        textAlign: 'center'
      },
      
      Icon: {
        align: 'right',
        textAlign: 'right',
        textDecoration: 'none'
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
                  <div class = 'github'>
                    <a style = {style.Icon} href = "https://github.com/Meronkha " target="_blank">
                    <div>
                        <img  onLoad = {() => this.fadeIn('GitLogo')} src = {Gitlogo} id = 'GitLogo'/>
                        <div id = 'githover' style = {{textDecoration: 'none', fontFamily: 'Monda', fontSize: '1vw', marginLeft: '-3.8vw', marginRight: '0.2vw', marginTop: '-1.2vw',color: 'white'}}>
                          <p>github</p>
                        </div>
                    </div>
                    </a>
                  </div>
                  
                  <div class = 'linked'>
                    <a style = {style.Icon} href = "https://www.linkedin.com/in/meronkha" target="_blank">
                      <img onLoad = {() => this.fadeIn('linkedLogo')} src = {Linked} id = 'linkedLogo'/>
                      <div style = {{textDecoration: 'none', fontFamily: 'Monda', fontSize: '1vw', marginLeft: '-4.5vw', marginRight: '0.2vw', marginTop: '-1.2vw',color: 'white'}}>
                        <p >linkedin</p>
                      </div>
                    </a>
                  </div>

                  <div class = 'codepen'>
                    <a style = {style.Icon} href = "https://codepen.io/meronkha/" target="_blank">
                      <img onLoad = {() => this.fadeIn('codepen')} src = {codepen} id = 'codepen'/>
                      <div style = {{textDecoration: 'none', fontFamily: 'Monda', fontSize: '1vw',marginLeft: '1.6vw', marginTop: '-0.8vw',color: 'white'}}>
                        <p>codepen</p>
                      </div>
                    </a>
                  </div>

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
