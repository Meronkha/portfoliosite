import React, { Component } from 'react';
import '../stylesheets/Main.css';
import MediaQuery from 'react-responsive';

// components
import Contact from './Contact.js';
import Infograph from './Infograph.js';
import Header from './Header.js'

// Images
// import bg from '../images/bg.png';
import LL from '../images/LL_New.png';
import UCL from '../images/ucl3.jpg';
import aa from '../images/aa.png';
import website from '../images/myWebsite.png';
import settings from '../icon/setings.png';


class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        renderTAB: false,
        renderUCL: false,
      };
    }

    componentDidMount = () => {
      window.addEventListener('scroll',this.increase);
      }

    increase = () => {
        let responseH = 0;
        responseH += window.scrollY;

        if (responseH > window.innerHeight/0.75){
          this.animate();
          this.setState({renderTAB: true});
          setTimeout(window.removeEventListener('scroll',this.increase), 1000);

        }
    }

    animate = () => {
      let bar = document.getElementById('experienceTAB');
      console.log(bar)
      bar.setAttribute('class','aboutme');

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
          <Contact id = 'contact'/>
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
                    <h1>UCL, MEng</h1>
                    <h2>Fall 2017 - present</h2>
                    <p>
                      I&#39;m a 2nd year Mechanical Engineering at UCL. Progessing with a 75% average in Year 1 (98th percentile of the Yeargroup),
                      I have studied the following key modules:
                      CAD, Dynamics Thermodynamics & Fluid Mechanics, Financial Mathematics and Material Science. <br/><br/>

                      I have always had a deep fascination for Technology and understanding how it works; Reading Engineering was the obvious choice for me.

                    </p>
                  </div>
                </div>
              </div>

              <br hr = '5'/>
              <div style = {style.experience1} className = 'experience1'>
                  <div className = 'LL'>
                    <img src = {LL} style = {style.LL}/>
                    <div className = 'innerDiv3'>
                      <h1>Developer, Learning Labs</h1>
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
              <div className = 'experience3'>
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
              </div>
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


        </MediaQuery>




        <MediaQuery query="(max-device-width: 650px)">
          <div className = 'development'>
            <img src = {settings}/>
            <h1> </h1> <br/>
            The mobile version of my site is currently undergoing some maintenance.
            <br/><br/>
            If you wish to access the site, please switch to a <span style = {{fontWeight: 700}}>non-mobile device. </span>
            <br/><br/><br/>

          </div>
          <Header/>
            {/*<div style = { style.mainDivM } className = 'mainDivM'>

              <div className = 'containerM'>

                <div style = {style.experience2M} className = 'experience2'>
                  <div className = 'UCLM'>
                    <img src = {UCL} style = {style.UCLM}/>
                    <div className = 'innerDivM'>
                      <h1>UCL, MEng</h1>
                      <h2>Fall 2017 - present</h2>
                      <p>
                        • I am currently studying Mechanical Engineering at UCL. <br/>
                        • Progressing to my 2nd year with a 1:1 (75%)<br/>
                        • Studied key modules such as CAD, Dynamics and Financial Mathematics.

                      </p>
                    </div>

                  </div>
                </div>
                <div style = {style.experience1M} className = 'experience1M'>
                <div className = 'LLM'>
                  <img src = {LL} style = {style.LLM}/>
                  <div className = 'innerDivM'>
                    <h1>Learning Labs</h1>
                    <h2>Fall 2018 - Present</h2>
                    <p>
                    • Full stack development of a bespoke online learning platform for a nationally syndicated private education company.<br/>
                    • The Learning Labs Portal allows comprehensive examinations, tasks, and analysis to be done by students and parents respectively.<br/>
                    • The platform is supported by an interactive database with multiple user profiles, and in-depth data analytics (client driven KPIs)
                    on student performance, application and progress.<br/>
                    • Built and maintained using ReactJS, ExpressJS, Firebase, HTML5, CSS3 and Bootstrap<br/>
                    </p>
                  </div>


                  </div>
                </div>
              </div>
            </div>

            <Contact id = 'contact'></Contact>*/}
        </MediaQuery>
      </div>
      );
  }



}

export default Main;
