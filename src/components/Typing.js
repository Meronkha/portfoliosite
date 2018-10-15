import React, { Component } from 'react';
import '../stylesheets/Typing.css';
import downArrow from '../icon/down.svg';
import MediaQuery from 'react-responsive';
import bg from '../images/bg.png';
import Header from './Header';

class Typing extends Component {
  constructor(props) {
      super(props);
      this.state = {
        render: false
      };
    }

  componentWillMount = () => {
    setTimeout(() => {
      this.show();
      console.log('Now we wait...');
    }, this.props.wait)
  };

  show = () => {
    this.setState({render:true});
  }

  render(){
    const style = {
      main: {
        backgroundColor: 'black',
        height: '120vh',
        width: '100vw',
        paddingTop: 50,
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: 'norepeat'

        // marginTop: 50
      },

      text: {
        fontSize: '10.5vw',
        fontFamily: 'Monda',
        margin: 0,
        // paddingTop: window.innerHeight/5,
        paddingLeft: -window.innerWidth/10,
        color: '#2b2a2a',
      },

      text2: {
        fontSize: '9vw',
        fontFamily: 'Monda',
        margin: 0,
        // paddingTop: 1,
        marginTop: -10,
        paddingLeft: -window.innerWidth/10,
        color: '#2b2a2a',

      },

      dropText: {
        fontSize: '3.1vw',
        fontFamily: 'Monda',
        margin: 0,
        paddingTop: 3,
        paddingLeft: 12,
        color: '#2b2a2a',
      },

      arrow: {
        paddingTop: 80,
        textAlign: 'left',
        paddingLeft: "46vw"
      },

      about: {
        fontSize: 17,
        fontFamily: 'Monda',
        textAlign: 'center',
        paddingTop: 90,
        paddingBottom: 4,
        color: 'white'

      },

      mainMobile: {
        height: '60vh',
        width: '100vw',
        backgroundColor: 'black',
        // height: window.innerHeight/3,
        paddingTop: 20,
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "600px 800px",
        backgroundRepeat: 'norepeat'

        // marginTop: 50
      },

      dropTextMob: {
        fontSize: '2.7vw',
        fontFamily: 'Monda',
        margin: 0,
        paddingTop: 10,
        paddingLeft: 7,
        paddingBottom: 10,
        color: '#2b2a2a',
      },

      arrowMob: {
        paddingTop: 100,
        // textAlign: 'center',
        marginLeft: 30
      },

      text1Mob: {
        fontSize: '10.5vw',
        fontFamily: 'Monda',
        margin: 0,
        // paddingTop: window.innerHeight/5,
        paddingLeft: -window.innerWidth/10,
        color: '#2b2a2a',
      },

      text2Mob: {
        fontSize: '9vw',
        fontFamily: 'Monda',
        margin: 0,
        // paddingTop: 1,
        marginTop: -10,
        paddingLeft: -window.innerWidth/10,
        color: '#2b2a2a',

      }
    }


    return(
      <div >
        <MediaQuery query="(min-device-width: 650px)">
          <div style = {style.main} className = 'typewriter'>
            <div className = {this.hidden}>
              <h1 style = {style.text}> Hi! <br/></h1>
              <h2 style = {style.text2}> My name is Omer</h2>
              <h3 style = {style.dropText}>I&#39;m an engineering student and programming hobbyist</h3>
            </div>
            <div className = 'pageMove' style = {style.arrow}>
              <img id = 'down' src = {downArrow}/>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 650px)">
          <div style = {style.mainMobile} className = 'typewriterMob'>
            <div className = {this.hiddenMob}>
              <h1 style = {style.text}> Hi! <br/></h1>
              <h2 style = {style.text2}> My name is Omer</h2>
              <h3 style = {style.dropTextMob}>I&#39;m an engineering student and programming hobbyist</h3>
            </div>

              <a className = 'pageMoveMob' style = {style.arrowMob} href = "http://www.google.com">

              <img id = 'down' src = {downArrow}/>

              </a>

          </div>
        </MediaQuery>
      </div>
    );
  }
}
export default Typing;
