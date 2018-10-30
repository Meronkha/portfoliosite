import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import '../stylesheets/Infograph.css';

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


export default class Infograph extends Component {
  constructor(props){
    super(props);
    this.state = {
        percent: 0,
        show: false,
        renderTAB: false
      };
      this.animate = this.animate.bind(this);
    }

  componentDidMount = () => {
    window.addEventListener('scroll',this.increase);
    }

  increase = () => {
    let responseH = 0;
    responseH += window.scrollY;

    if (responseH > window.innerHeight/1.5){
      this.animate();
      this.setState({show: true, renderTAB: true});
      setTimeout(window.removeEventListener('scroll',this.increase), 1000)

    }

    if (this.state.show){
      const percent = this.state.percent + 1;
      if (percent >= 101) {
        clearTimeout(this.tm);
        return;
      }
      this.setState({ percent });
      this.tm = setTimeout(this.increase, 10);
    }
  }

  restart = () => {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  animate = () => {
    let bar = document.getElementById('test');
    bar.setAttribute('class','skills');

  }
  render() {
    const style = {
      main: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        paddingLeft: '20vw',
        backgroundColor: '#e8efef',
        paddingBottom: '6vw',
        // paddingTop: '3vw'
      },

      div: {
        paddingRight: '6vw',
        marginRight: '-2vw',
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

      imgNODE: {
        width: '7vw',
        height: '4vw',
        marginTop: '-6.7vw',
        marginLeft: '0.93vw',
        marginRight: '-4vw'
      },

      main2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-4vw',
        paddingLeft: '35vw',
        backgroundColor: '#e8efef',
        fontFamily: 'Arapey',
      }

    }

    return (
      <div  style = {{fontColor: 'transparent'}}>
        <div id = 'test' style = {{fontColor: 'transparent'}}>
        {this.state.renderTAB ? <div id = 'slider'>
                                <h1 style = {{fontColor: 'transparent'}}> MY SKILLS </h1>
                              </div>: null}
        </div>
          <div  className = 'main' style = {style.main}>

            <div onScroll = {() => this.checkHeight()} style = {style.div}      className = 'iconHover'>
              <Circle  strokeWidth="3.5" strokeColor="#ffb159" percent={this.state.percent}/>
              <img style = {style.imgJS} src = {js} />
              <p style = {{marginLeft: '1.6vw', marginTop: '1.8vw'}}>JavaScript</p>
              {/*<p style = {style.percent}>{this.state.percent}%</p>
              <p style = {style.name}>JavaScript</p>
              <p style = {style.list}>
                ReactJS, ExpressJS, MongoJS, p5.JS
              </p>*/}
            </div>
            <div style = {style.div} className = 'iconHover'>
              <Circle   strokeWidth="3.5" strokeColor="#e8de2e" percent={this.state.percent}/>
              <img style = {style.imgPyth} src = {pyth} />
              <p style = {{marginTop: '2vw', marginLeft: '2.8vw'}}>Python</p>
              {/*<p style = {style.percent}>{this.state.percent}%</p>
              <p style = {style.name}>Python</p>
              <p style = {style.list}>
                Flask, Django, Pygame, Tkinter
              </p>*/}
            </div>
            <div style = {style.div} className = 'iconHover'>
              <Circle  strokeWidth="3.5" strokeColor="#fc662a" percent={this.state.percent}/>
              <img style = {style.imgHTML} src = {html} />
              <p style = {{marginTop: '1.7vw', marginLeft: '2.7vw'}}>HTML 5</p>
              {/*<p style = {style.percent}>{this.state.percent}%</p>
              <p style = {style.name}>HTML/CSS</p>
              <p style = {style.list}>
                Bootstrap, Material-UI, Animations
              </p>*/}
            </div>
            <div style = {style.div} className = 'iconHover'>
              <Circle  strokeWidth="3.5" strokeColor="#0e50d3" percent={this.state.percent}/>
              <img style = {style.imgCSS} src = {css} />
              <p style = {{marginTop: '1.4vw', marginLeft: '3.2vw'}}>CSS3</p>
              {/*<p style = {style.percent}>{this.state.percent}%</p>
              <p style = {style.name}>MATLAB</p>
              <p style = {style.list}>
                Proficient data analysis of large sets, and sketching
              </p>*/}
            </div>
            <div style = {style.div} className = 'iconHover'>
              <Circle  strokeWidth="3.5" strokeColor="#158484" percent={this.state.percent}/>
              <img style = {style.imgMATLAB} src = {matlab} />
              <p style = {{marginTop: '1.4vw', marginLeft: '2.5vw'}} >MATLAB</p>
              {/*<p style = {style.percent}>{this.state.percent}%</p>
              <p style = {style.name}>CAD</p>
              <p style = {style.list}>
                CATIA and SolidWorks with custom imports
              </p>*/}
            </div>
            <br/><hr size = "50"/>

          </div>
          <br/>
          <div style = {style.main2} >
              <div style = {style.div2} className = 'iconHover'>
                <Circle  strokeWidth="3.5" strokeColor="#f70000" percent={this.state.percent}/>
                <img style = {style.imgCATIA} src = {catia} />
                <p style = {{marginTop: '2.9vw', marginLeft: '2.9vw'}}>CATIA</p>

              </div>

              <div style = {style.div2} className = 'iconHover'>
                <Circle  strokeWidth="3.5" strokeColor="#6ae9f7" percent={this.state.percent}/>
                <img style = {style.imgREACT} src = {react} />
                <p style = {{marginTop: '1.3vw', marginLeft: '3.1vw'}}>React</p>

              </div>

              <div style = {style.div2} className = 'iconHover'>
                <Circle  strokeWidth="3.5" strokeColor="#37b24d" percent={this.state.percent}/>
                <img style = {style.imgNODE} src = {node} />
                <p style = {{marginTop: '2.6vw', marginLeft: '2.7vw'}}>NodeJS</p>
                {/*<p style = {style.percent}>{this.state.percent}%</p>
                <p style = {style.name}>CAD</p>
                <p style = {style.list}>
                  CATIA and SolidWorks with custom imports
                </p>*/}
              </div>
          </div>

      </div>

    );
  }



}
