import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import '../stylesheets/Infograph.css';
import MediaQuery from 'react-responsive';


//Images
import css from '../icon/CSS3_logo.png';
import js from '../icon/JS_Logo.png';
import html from '../icon/html.png';
import pyth from '../icon/pyth.png';
import matlab from '../icon/Matlab.png';
import catia from '../icon/catia.png';
import react from '../icon/react.png';
import node from '../icon/nodejs2.png';
import git from '../icon/nodejs2.png';
import c from '../icon/C_lang.png';

export default class Infograph extends Component {
  constructor(props){
    super(props);
    this.state = {
        percent: 0,
        show: false,
        renderTAB: false,
        // Default non-M devices
        target: 'test',
        mission: 'skills'
      };
      this.animate = this.animate.bind(this);
    }

  componentDidMount = () => {
    if (this.checkMobileStatus()){
      this.setState({target: 'testM', mission: 'skillsM'});
    }
    else {
      this.setState({target: 'test', mission: 'skills'});
    }
    window.addEventListener('scroll',this.increase);
    }
      
  checkMobileStatus = function(){
    let x = window.matchMedia("(max-width:650px");
    if (x.matches){
      return true;
    }
    return false;
  }

  increase = () => {
    let responseH = 0;
    responseH += window.scrollY;

    if (responseH > window.innerHeight/1.5){
      this.animate(this.state.target,this.state.mission);
      this.setState({show: true, renderTAB: true});
      setTimeout(window.removeEventListener('scroll',this.increase), 1000)

    }

    if (this.state.show){
      const percent = this.state.percent + 2;
      if (percent >= 101) {
        clearTimeout(this.tm);
        return;
      }
      this.setState({ percent });
      this.tm = setTimeout(this.increase, 5);
    }
  }

  restart = () => {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  animate = (target,mission) => {
    let bar = document.getElementById(target);
    bar.setAttribute('class', mission);

  }
  render() {
    const style = {
      main: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        paddingLeft: '32vw',
        backgroundColor: 'white',
        paddingBottom: '6vw',
        // paddingTop: '3vw'
      },
      
      main2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-8vw',
        paddingLeft: '34vw',
        backgroundColor: 'white',
        fontFamily: 'Arapey',
      },
      
      main3: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '34vw',
        backgroundColor: 'white',
        fontFamily: 'Arapey',
      },

      div: {
        paddingRight: '6vw',
        marginRight: '-1.9vw',
        // marginLeft: '5vw',
        width: "15vw",
        display: 'flex',
        flexDirection: 'column'
      },

      div2: {
        paddingRight: '6vw',
        marginLeft: '-1.9vw',
        width: "15vw",
        display: 'flex',
        flexDirection: 'column'
      },
      
      div3: {
        paddingRight: '6vw',
        marginLeft: '-1.9vw',
        width: "15vw",
        display: 'flex',
        flexDirection: 'column'
      },

      percent: {
        fontSize: '2vw',
        marginTop: '-7vw',
        fontWeight: 600,
        paddingBottom: '3vw',
        fontFamily: 'Monda',
        letterSpacing: '0.3vw',
        textAlign: 'center',
      },

      name: {
        fontSize: '1.4vw',
        fontFamily: 'Arapey',
        fontWeight: 300,
        textAlign: 'center',
        letterSpacing: '0.1vw'
      },

      list: {
        marginTop: '1vw',
        wordWrap: 'break-word'
      },

      imgJS: {
        width: '4.6vw',
        height: '5.7vw',
        marginTop: '-7.6vw',
        marginLeft: '2vw',
        marginRight: '-4.95vw'
      },

      imgPyth: {
        width: '4.6vw',
        height: '4.6vw',
        marginTop: '-6.8vw',
        marginLeft: '2vw',
        marginRight: '-4.9vw'
      },

      imgHTML: {
        width: '6vw',
        height: '5.7vw',
        marginTop: '-7.5vw',
        marginLeft: '1.5vw',
        marginRight: '-3.9vw'
      },

      imgCSS: {
        width: '4.5vw',
        height: '6vw',
        marginTop: '-7.5vw',
        marginLeft: '2.1vw',
        marginRight: '-4vw'
      },

      imgMATLAB: {
        width: '6vw',
        height: '6vw',
        marginTop: '-7.5vw',
        marginLeft: '1.1vw',
        marginRight: '-4vw'
      },

      imgCATIA: {
        width: '4.5vw',
        height: '4.5vw',
        marginTop: '-7.5vw',
        marginLeft: '2.3vw',
        marginRight: '-4vw'
      },

      imgREACT: {
        width: '9vw',
        height: '6.5vw',
        marginTop: '-7.8vw',
        marginLeft: '0vw',
        marginRight: '-4vw'
      },
      
      imgC: {
        width: '6.5vw',
        height: '6.5vw',
        marginTop: '-7.8vw',
        marginLeft: '1.2vw',
        marginRight: '-8vw'
      },


      imgNODE: {
        width: '7vw',
        height: '4vw',
        marginTop: '-6.7vw',
        marginLeft: '0.93vw',
        marginRight: '-4vw'
      },
      
      /*
      ---------------------
      |    Mobile style   |
      ---------------------
      
      */
      mainM: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '6vw',
        paddingLeft: '3vw',
        backgroundColor: 'white',
        paddingBottom: '10vw',
      },
      
      main2M: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-18vw',
        paddingLeft: '3vw',
        backgroundColor: 'white',
        fontFamily: 'Arapey',
        paddingBottom: '6vw'
      },
      
      main3M: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-8vw',
        paddingLeft: '3vw',
        backgroundColor: 'white',
        fontFamily: 'Arapey',
      },
      divM: {
        paddingRight: '1vw',
        marginLeft: '5vw',
        width: "25vw",
        display: 'flex',
        flexDirection: 'column'
      },

      div2M: {
        paddingRight: '1vw',
        marginLeft: '5vw',
        width: "25vw",
        display: 'flex',
        flexDirection: 'column'
      },
      
      div3M: {
        paddingRight: '1vw',
        marginLeft: '5vw',
        width: "25vw",
        display: 'flex',
        flexDirection: 'column'
      },

    }

    return (
      <div  style = {{fontColor: 'transparent'}}>
        <MediaQuery query="(min-device-width: 650px)">

  
          <div id = 'test' style = {{fontColor: 'transparent'}}>
          {this.state.renderTAB ? <div id = 'slider'>
                                  <h1 style = {{fontColor: 'transparent'}}>MY TECH </h1>
                                </div>: null}
          </div>
        
            <div  className = 'main' style = {style.main}>
  
              <div onScroll = {() => this.checkHeight()} style = {style.div}      className = 'iconHover'>
                <Circle  strokeWidth="3.5" strokeColor="#ffb159" percent={this.state.percent}/>
                <img style = {style.imgJS} src = {js} />
                <p style = {{marginLeft: '1.6vw', marginTop: '1.8vw'}}>JavaScript</p>
              </div>
              <div style = {style.div} className = 'iconHover'>
                <Circle strokeWidth="3.5" strokeColor="#fff021" percent={this.state.percent}/>
                <img style = {style.imgPyth} src = {pyth} />
                <p style = {{marginTop: '2vw', marginLeft: '2.8vw'}}>Python</p>
              </div>
              <div style = {style.div} className = 'iconHover'>
                <Circle  strokeWidth="3.5" strokeColor="#103c82" percent={this.state.percent}/>
                <img style = {style.imgC} src = {c} />
                <p style = {{marginTop: '1vw', marginLeft: '4vw'}}>C</p>
              </div>
              <br/><hr size = "50"/>
  
            </div>
            <br/>
            <div style = {style.main2} >
                <div style = {style.div2} className = 'iconHover'>
                
                  <Circle  strokeWidth="3.5" strokeColor="#f70000" percent={this.state.percent}/>
                  <img style = {style.imgHTML} src = {html} />
                  <p style = {{marginTop: '1.7vw', marginLeft: '2.7vw'}}>HTML5  </p>
  
                </div>
  
                <div style = {style.div2} className = 'iconHover'>
                
                  <Circle  strokeWidth="3.5" strokeColor="#0e50d3" percent={this.state.percent}/>
                  <img style = {style.imgCSS} src = {css} />
                  <p style = {{marginTop: '1.3vw', marginLeft: '3.1vw'}}>CSS3</p>
  
                </div>
  
                <div style = {style.div2} className = 'iconHover'>
                  <Circle  strokeWidth="3.5" strokeColor="#37b24d" percent={this.state.percent}/>
                  <img style = {style.imgNODE} src = {node} />
                  <p style = {{marginTop: '2.6vw', marginLeft: '2.7vw'}}>NodeJS</p>
                  
                </div>
            </div>
            <div style = {style.main3} >
                <div style = {style.div3} className = 'iconHover'>
                
                  <Circle  strokeWidth="3.5" strokeColor="#f70000" percent={this.state.percent}/>
                  <img style = {style.imgCATIA} src = {catia} />
                  <p style = {{marginTop: '2.9vw', marginLeft: '2.9vw'}}>CATIA</p>
  
                </div>
  
                <div style = {style.div3} className = 'iconHover'>
                
                  <Circle  strokeWidth="3.5" strokeColor="#6ae9f7" percent={this.state.percent}/>
                  <img style = {{width: '10vw',height: '7vw', marginTop: '-8.2vw',marginLeft: '-0.5vw',marginRight: '-11vw'}} src = {react} />
                  <p style = {{marginTop: '1.3vw', marginLeft: '3.1vw'}}>React</p>
  
                </div>
  
                <div style = {style.div3} className = 'iconHover'>
                  <Circle  strokeWidth="3.5" strokeColor="#5a9bad" percent={this.state.percent}/>
                  <img style = {style.imgMATLAB} src = {matlab} />
                  <p style = {{marginTop: '1.6vw', marginLeft: '2.4vw'}}>MATLAB</p>
                  
                </div>
            </div>
            
          </MediaQuery>
            
          {/*
              ----------------
              | Mobile Dev   |
              ----------------
          
          */}
            
            
          <MediaQuery query="(max-device-width: 650px)">
          
          <div id = 'testM' style = {{fontColor: 'transparent'}}>
            {this.state.renderTAB ? <div id = 'slider'>
                                  <h1 style = {{fontColor: 'transparent'}}>MY TECH </h1>
                                </div>: null}
          </div>
            <div  className = 'main' style = {style.mainM}>
  
              <div onScroll = {() => this.checkHeight()} style = {style.divM}      className = 'iconHover'>
                <Circle  strokeWidth="4" strokeColor="#ffb159" percent={this.state.percent}/>
                <img style = {{width: '12vw',height: '15vw', marginTop: '-19vw',marginLeft: '5.5vw',marginRight: '-15vw'}} src = {js} />
                <p style = {{marginLeft: '1.6vw', marginTop: '1.8vw'}}>JavaScript</p>
              </div>
              <div style = {style.divM} className = 'iconHover'>
                <Circle strokeWidth="4" strokeColor="#fff021" percent={this.state.percent}/>
                <img style = {{width: '14vw',height: '14vw', marginTop: '-18vw',marginLeft: '5vw',marginRight: '-15vw'}} src = {pyth} />
                <p style = {{marginTop: '2vw', marginLeft: '2.8vw'}}>Python</p>
              </div>
              <div style = {style.divM} className = 'iconHover'>
                <Circle  strokeWidth="4" strokeColor="#103c82" percent={this.state.percent}/>
                <img style = {{width: '18vw',height: '18vw', marginTop: '-20.8vw',marginLeft: '3.5vw',marginRight: '-15vw'}} src = {c} />
                <p style = {{marginTop: '1vw', marginLeft: '4vw'}}>C</p>
              </div>
              <br/><hr size = "50"/>
  
            </div>
            <br/>
            <div style = {style.main2M} >
                <div style = {style.div2M} className = 'iconHover'>
                
                  <Circle  strokeWidth="4" strokeColor="#f70000" percent={this.state.percent}/>
                  <img style = {{width: '16vw',height: '16vw', marginTop: '-19vw',marginLeft: '3.8vw',marginRight: '-14vw'}} src = {html} />
                  <p style = {{marginTop: '1.7vw', marginLeft: '2.7vw'}}>HTML5  </p>
  
                </div>
  
                <div style = {style.div2M} className = 'iconHover'>
                
                  <Circle  strokeWidth="4" strokeColor="#0e50d3" percent={this.state.percent}/>
                  <img style = {{width: '12vw',height: '17vw', marginTop: '-20vw',marginLeft: '6vw',marginRight: '-15vw'}} src = {css} />
                  <p style = {{marginTop: '1.3vw', marginLeft: '3.1vw'}}>CSS3</p>
  
                </div>
  
                <div style = {style.div2M} className = 'iconHover'>
                  <Circle  strokeWidth="4" strokeColor="#37b24d" percent={this.state.percent}/>
                  <img style = {{width: '17.5vw',height: '11vw', marginTop: '-17vw',marginLeft: '3.5vw',marginRight: '-15vw'}} src = {node} />
                  <p style = {{marginTop: '2.6vw', marginLeft: '2.7vw'}}>NodeJS</p>
                  
                </div>
            </div>
            <div style = {style.main3M} >
                <div style = {style.div3M} className = 'iconHover'>
                
                  <Circle  strokeWidth="4" strokeColor="#f70000" percent={this.state.percent}/>
                  <img style = {{width: '14vw',height: '14vw', marginTop: '-19vw',marginLeft: '5.5vw',marginRight: '-15.5vw'}} src = {catia} />
                  <p style = {{marginTop: '2.9vw', marginLeft: '2.9vw'}}>CATIA</p>
  
                </div>
  
                <div style = {style.div3M} className = 'iconHover'>
                
                  <Circle  strokeWidth="4" strokeColor="#6ae9f7" percent={this.state.percent}/>
                  <img style = {{width: '25vw',height: '18vw', marginTop: '-20vw',marginLeft: '-0.5vw',marginRight: '-15vw'}} src = {react} />
                  <p style = {{marginTop: '1.3vw', marginLeft: '3.1vw'}}>React</p>
  
                </div>
  
                <div style = {style.div3M} className = 'iconHover'>
                  <Circle  strokeWidth="4" strokeColor="#5a9bad" percent={this.state.percent}/>
                  <img style = {{width: '16vw',height: '16vw', marginTop: '-19vw',marginLeft: '3.5vw',marginRight: '-15vw'}} src = {matlab} />
                  <p style = {{marginTop: '1.6vw', marginLeft: '2.4vw'}}>MATLAB</p>
                  
                </div>
            </div>
                        
            
          </MediaQuery>


      </div>

    );
  }



}
