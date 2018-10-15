import React, { Component } from 'react';
import '../stylesheets/Title.css';

// Images
import goku from '../images/me2.jpeg';
import Background from '../images/background.jpg';

// Icons
import github from '../icon/github-logo.png';
import linkedin from '../icon/linkedin-logo.png';


class Title extends Component {
  render(){
    const style = {

      mainDiv: {
        //backgroundColor: '#1f51af',
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: 'middle',
        height: 0.65*window.innerHeight,
        align: 'center'
      },

      goku: {
        align: 'center'

      },

      info: {
        fontFamily: 'Monda',
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: 'white'

      },

      Header: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Monda',
        textAlign: 'center',

      },

      Quote: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Satisfy',
        textAlign: 'center',
        //width:18

      },

      gitLogo: {
        imageSize: 50,
        align: 'center',



      }




    }

    return (

      <div id = 'divTitle' style = { style.mainDiv }>
          <div><img style = { style.goku } id = 'goku' src = {goku}/></div>
          <br/>
          <div id = 'myInfo' style = { style.Header }>
            <h3>
            Electronics and Programming Hobbyist
            </h3>
          </div>
           <div style = { style.info } id = 'myInfo'>
              <h4>
                Engineering Student @ UCL
              </h4>
          </div>
          <hr id = 'lineBreak' />
          <div style = { style.Quote } id = 'myQuote'>
            <h4>
                <img id = 'gitLogo'src = {github}/>
                <img id = 'linkedinLogo'src = {linkedin}/>
            </h4>
          </div>

      </div>

      );



  }
}

export default Title;
