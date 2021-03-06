import React, { Component } from 'react';
import '../stylesheets/Main.css';
import MediaQuery from 'react-responsive';

// components
import Contact from './Contact.js';
import Infograph from './Infograph.js';
import Header from './Header.js'

// Images
import LL from '../images/LLL.png';
import UCL from '../images/ucl.jpg';
import aa from '../images/aa.png';
import website from '../images/myWebsite.png';
import settings from '../icon/setings.png';
import email from '../icon/email.png';


class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        renderTAB: false,
        renderUCL: false,
        // Default nonM
        target: 'experienceTAB',
        mission: 'aboutme'
        
      };
    }
    
    checkMobileStatus = function(){
      let x = window.matchMedia("(max-width:650px");
      if (x.matches){
        return true;
      }
    return false;
  }

  componentDidMount = () => {
    if (this.checkMobileStatus()){
      this.setState({target: 'experienceTABM', mission: 'aboutmeM'});
    }
    else {
      this.setState({target: 'experienceTAB', mission: 'aboutme'});
    }
    window.addEventListener('scroll',this.increase);
    }

    increase = () => {
        let responseH = 0;
        responseH += window.scrollY;

        if (responseH > window.innerHeight/0.75){
          this.animate(this.state.target,this.state.mission);
          this.setState({renderTAB: true});
          setTimeout(window.removeEventListener('scroll',this.increase), 1000);

        }
    }

    animate = (target,mission) => {
      let bar = document.getElementById(target);
      console.log(bar)
      try{
        bar.setAttribute('class',mission);
      }
      catch(error){
        console.log(error);
      }


    }

    scroll = () => {
      let scrollHeight = 2*window.scrollY;
      let header = document.getElementById("contact");
      let load = document.getElementById("")
      window.onscroll = function() {
        if (window.scrollY > scrollHeight) {
          header.classList.add("slide-up");

        }
      scrollHeight = window.scrollY;
      };
    }

  render(){
    const style = {
      mainDiv: {
        paddingLeft: '5vw',
        paddingTop: '-3.3vw',
        alignItems: 'right',
        backgroundSize: "cover",
        backgroundColor: 'white',
        borderColor: 'white'
      },

      disc: {
        fontFamily: 'Monda',
        color: 'white',
        fontSize: 15
      },

      text: {
        fontFamily: 'Monda',
        color: 'white',
        fontSize: 25
      },

      quote: {
        fontFamily: 'Merriweather Sans',
        color: 'black',
        fontSize: '1.6vw',
        paddingLeft: 50,
        textAlign: 'left',
        fontStyle: 'oblique'

      },

      mainMobileDiv: {
        height: '120vh',

      },

      gokuM:{
        textAlign: 'left'
      },

      quoteM:{
        textAlign: 'right',
        fontFamily: 'Merriweather Sans',
        marginRight: '-15vw',
        fontSize: '3.3vw'
      },


      qual: {
        fontSize: "2.4vw",
        fontFamily: "monda",
        paddingLeft: "6.5vw",
        paddingTop: "3vw"
      }
    }
    return(
      <div >
        <MediaQuery query="(min-device-width: 650px)">
          {/*<Contact id = 'contact'/>*/}
          <Infograph id = 'Infograph'/>
          <div id = 'experienceTAB'>
          {this.state.renderTAB ?
                                    <div>
                                      <h1> MY EXP </h1>
                                    </div>: null}
          </div>

          <div style = { style.mainDiv } className = 'mainDiv'>

            <div className = 'container'>

              <div className = 'experience2'>
                <div className = 'UCL'>
                  <img src = {UCL} style = {style.UCL}/>
                  <div className = 'innerDiv'>
                    <h1>UCL, BEng with Programming</h1>
                    <h2>Fall 2017 - present</h2>
                    <p>
                      Progessing to 2nd year with a 75%+ average;
                        I have studied the following key modules:<br/>
                          &nbsp;&#8226;Programming theory<br/>&nbsp;&#8226;CAD <br/>&nbsp;&#8226;Dynamics<br/>&nbsp;&#8226;Thermodynamics & Fluid Mechanics <br/>

                        I have always had a deep fascination for Technology and understanding how it works; Reading Engineering was the obvious choice for me.

                    </p>
                  </div>
                </div>
              </div>

              <br hr = '5'/>
              
              <div className = 'experience1'>
                  <div className = 'LL'>
                    <img src = {LL} style = {style.LL}/>
                    <div className = 'innerDiv3'>
                      <h1>Developer, www.learninglabsuk.com</h1>
                      <h2>Fall 2018 - Present</h2>
                      <p>
                      Working in a team of 3, I was reponsible for the
                      full stack development of a web application for a nationally syndicated private education company.
                      The Learning Labs Portal allows comprehensive examinations, tasks, and analysis to be done by students and parents respectively.<br/><br/>
                      The platform is supported by an interactive database with multiple user profiles, and in-depth data analytics (client driven KPIs)
                      on student performance, application and progress.<br/><br/>
                      Built and maintained using ReactJS, ExpressJS, Firebase, HTML5, CSS3 and Bootstrap<br/>
                      </p>
                    </div>
                  </div>
              </div>
              {/*<div className = 'experience3'>
                  <div className = 'web'>
                    <img src = {website} style = {style.LL}/>
                    <div className = 'innerDiv2'>
                      <h1>Omerkhan.co.uk</h1>
                      <h2>Fall 2018 - Present</h2>
                      <p>
                        With the intention of learning the fundamentals of full stack development, I set out on a journey of creating my own website. <br/>
                        Learning how to operate a back-end server with expressJS, model an aesthetic front-end with reactJS, understanding DNS, utilising git to appropriately and safely to advance versions and much more.
                        <br/><br/>
                        This project was essential to my development.


                      </p>
                    </div>
                  </div>
              </div> */}
              {/*<div style = {style.experience3} className = 'experience1'>
                  <div className = 'AA'>
                    <img src = {aa} style = {style.LL}/>
                    <div className = 'innerDiv'>
                      <h1>Senior A Level Tutor, AA</h1>
                      <h2>Fall 2017 - Present</h2>
                      <p>
                      <br/>
                      I currently teach Math & Further Math at Ali&#39;s Academy.
                      <br/><br/>
                      With the responsibility for teaching a class of 5-7 students, writing examination papers and syllabus. I find the experience of teaching others immensely gratifying and
                      it continues to develop my ability to convey ideas clearly and coherently, organise plans and manage my time
                      between work and university in an efficient manner. I was also awarded 'Best A Level Tutor'.
                      </p>
                    </div>
                  </div>
              </div> */}
            </div>
            
          </div>
          {/*<div className = 'email'>
            <div className = "obj1">
              <img src = {email}/>
            </div>
            <div className = "obj2">
              <p>
                omerfkhan98@gmail.com
              </p>
            </div>
          </div>*/}


        </MediaQuery>




        <MediaQuery query="(max-device-width: 650px)">
          {/*
              The maintenance bit
          */}
          {/*<div className = 'development'>
            <img src = {settings}/>
            <h1> </h1> <br/>
            The mobile version of my site is currently undergoing some maintenance.
            <br/><br/>
            If you wish to access the full site, please switch to a <span style = {{fontWeight: 700}}>non-mobile device. </span>
            <br/><br/><br/>

          </div> */}
          
          <Infograph id = 'Infograph'/>
          <div id = 'experienceTABM'>
          {this.state.renderTAB ?
                                    <div>
                                      <h1> MY EXP </h1>
                                    </div>: null}
          </div>

          <div className = 'mainDivM'>

            <div className = 'containerM'>

              <div className = 'experience2M'>
                <div className = 'UCLM'>
                  <img src = {UCL} style = {style.UCL}/>
                  <div className = 'innerDivM'>
                    <h1>UCL, BEng w/ Programming</h1>
                    <h2>Fall 2017 - present</h2>
                    <p>
                      Progessing to 2nd year with a 75%+ average;
                        I have studied the following key modules:<br/>
                          <span style = {{fontWeight: '500'}}>
                          &nbsp;&#8226;Programming theory<br/>&nbsp;&#8226;CAD <br/>&nbsp;&#8226;Dynamics<br/>&nbsp;&#8226;Thermodynamics & Fluid Mechanics <br/> </span>

                        I have always had a deep fascination for Technology and understanding how it works; Reading Engineering was the obvious choice for me.

                    </p>
                  </div>
                </div>
              </div>

              <br hr = '5'/>
              
              <div className = 'experience1M'>
                  <div className = 'LLM'>
                    <img src = {LL}/>
                    <div className = 'innerDiv3M'>
                      <h1>Developer, www.learninglabsuk.com</h1>
                      <h2>Fall 2018 - Present</h2>
                      <p>
                      Working in a team of 3, I was reponsible for the
                      full stack development of a web application for a nationally syndicated private education company.
                      The Learning Labs Portal allows comprehensive examinations, tasks, and analysis to be done by students and parents respectively.<br/><br/>
                      The platform is supported by an interactive database with multiple user profiles, and in-depth data analytics (client driven KPIs)
                      on student performance, application and progress.<br/><br/>
                      Built and maintained using <span style = {{fontWeight: 'bold'}}> ReactJS, ExpressJS, Firebase, HTML5, CSS3 and Bootstrap </span><br/>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
          {/*<div className = 'email'>
            <div className = "obj1">
              <img src = {email}/>
            </div>
            <div className = "obj2">
              <p>
                omerfkhan98@gmail.com
              </p>
            </div>
          </div> */}

          
        </MediaQuery>
      </div>
      );
  }



}

export default Main;
