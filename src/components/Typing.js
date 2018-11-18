import React, { Component } from 'react';
import '../stylesheets/Typing.css';
import downArrow from '../icon/down.svg';
import MediaQuery from 'react-responsive';
import Header from './Header';

class Typing extends Component {
  constructor(props) {
      super(props);
      this.state = {
        render: false
      };
    }

  componentWillMount = () => {
    // do something
  };

  handleClick = () => {
    for(let i = 0; i < window.innerHeight; i++){
      setTimeout(this.scroller(),100)
    };
  };

  scroller = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  show = () => {
    this.setState({render:true});
  }

  animate = (id) => {
    document.getElementById(id).style.opacity='1'
  }

  render(){
    const style = {
      main: {
        backgroundColor: 'white',
        height: '120vh',
        width: 'auto',
        margin: 0,
        paddingTop: 50,
        // backgroundImage: "url(" + bg + ")", <-- bg img
        backgroundSize: "cover",
        scrollBehavior: "smooth"
      },
      dropText: {
        fontSize: '1.7vw',
        letterSpacing: "0.15vw",
        fontFamily: 'Monda',
        letterSpacing: '0.25vw',
        // textAlign: 'center',
        margin: 0,
        paddingLeft: "33vw",
        color: '#2b2a2a'
      },
      arrow: {
        paddingTop: "8vw",
        textAlign: 'center',
        marginLeft: '0.5vw'

      },

      myName: {
        fontSize: '5.7vw',
        fontWeight: '500',
        fontFamily: 'Arapey',
        marginBottom: '-0.1vw',
        letterSpacing: "0.2vw",
        textAlign: 'center',
        paddingTop: '12vw',
        // verticalAlign: 'middle',
        color: '#0c1a2d',
      },

      mainM: {
        backgroundColor: '#e8efef',
        height: '120vh',
        width: '100vw',
        paddingTop: "35vw",
        // backgroundImage: "url(" + bg + ")", <-- bg img
        backgroundSize: "cover",
        backgroundRepeat: 'norepeat',
        scrollBehavior: "smooth"
      },
      dropTextM: {
        fontSize: '2.7vw',
        fontFamily: 'Monda',
        margin: 0,
        paddingTop: 3,
        paddingLeft: "10.9vw",
        color: '#2b2a2a'
      },
      arrowM: {
        paddingTop: "25vw",
        textAlign: 'center',
        marginLeft: "-4.4vw"
      },
      aboutM: {
        fontSize: 17,
        fontFamily: 'Monda',
        textAlign: 'center',
        paddingTop: 90,
        paddingBottom: 4,
        color: 'white'
      },

      myNameM: {
        fontSize: '17.1vw',
        fontFamily: 'Faustina',
        margin: 0,
        letterSpacing: "0.4vw",
        textAlign: 'center',
        marginLeft: "-4vw",
        paddingTop: '10vw',
        verticalAlign: 'middle',
        color: '#0c1a2d',
      }
    }


    return(
      <div >
        <MediaQuery query="(min-device-width: 650px)">
          <div style = {style.main} className = 'typewriter'>
            <div className = {this.hidden}>
              <h4 style = {style.myName}>Omer Khan</h4>
              <h3 style = {style.dropText}>Engineer | Developer | Designer    </h3>
              {/*<div className = "lineBreak"></div>*/}
            </div>
            <Header></Header>
            <div className = 'pageMove' style = {style.arrow}>
              <a>
                <img id = 'down' onClick = {() => this.handleClick()} src = {downArrow}/>
              </a>
            </div>
          </div>
        </MediaQuery>

        {/*<MediaQuery query="(max-device-width: 650px)">
          <div style = {style.mainM} className = 'typewriterM'>
            <div className = {this.hidden}>
              <h4 style = {style.myNameM}>Omer Khan</h4>
              <h3 style = {style.dropTextM}>Engineer | Web Developer | Passionate Learner  </h3>
              <div className = "lineBreakM"></div>
            </div>
            <Header></Header>
            <div className = 'pageMoveM' style = {style.arrowM}>
              <a>
                <img id = 'downM' onClick = {() => this.handleClick()} src = {downArrow}/>
              </a>
            </div>
          </div>
        </MediaQuery>*/}
      </div>
    );
  }
}
export default Typing;
