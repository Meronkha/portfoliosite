import React, { Component } from 'react';
import '../stylesheets/Main.css';
import MediaQuery from 'react-responsive';

// Images
import me from '../images/me2.jpeg';
import bg from '../images/bg.png';



class Main extends Component {
  render(){
    const style = {
      mainDiv: {
        backgroundColor: 'white',
        height: '120vh',
        // backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        margin: "5vw"
      },

      goku: {
        // paddingTop: 30
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
        // paddingTop: '30px',
        // paddingBottom: '20px',
        // fontWeight: "bolder"
      },

      mainMobileDiv: {
        backgroundColor: 'white',
        height: '120vh',
        // backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        margin: "5vw"
      },
    }
    return(
      <div >
        <MediaQuery query="(min-device-width: 900px)">
          <div style = { style.mainDiv } className = 'mainDiv'>
            <div className = 'test'>
              <img style = { style.goku } id = 'goku' src = {me}/>
              <p id = 'para' style = {style.quote}>“An avid learner and self-taught programmer looking to broaden his knowledge and experience in the field of Software Engineering and Technology.”</p>
            </div>
            <div className = 'container'>
              <div className = 'aboutme'>
                <h1>Education</h1>
                <br></br>
                <p>
                Progressing to 2nd year with a first (75%) <br/>
                <br></br>
                A LEVELS<br /> A* in Math, Further Math & Physics  <br /> | Best in my year (100+ students)


                </p>

              </div>
              <div className = 'education'>
                <h1>Experience</h1>

              </div>
              <div className = 'skills'>
                <h1>Skills</h1>

              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 900)">
        <div style = { style.mainMobileDiv } className = 'mainDiv'>
          <div className = 'test'>
            <img style = { style.goku } id = 'goku' src = {me}/>
            <p id = 'para' style = {style.quote}>“An avid learner and self-taught programmer looking to broaden his knowledge and experience in the field of Software Engineering and Technology.”</p>
          </div>
          <div className = 'container'>
            <div className = 'aboutme'>
              <h1>Education</h1>
              <br></br>
              <p>
              Progressing to 2nd year with a first (75%) <br/>
              <br></br>
              A LEVELS<br /> A* in Math, Further Math & Physics  <br /> | Best in my year (100+ students)


              </p>

            </div>
            <div className = 'education'>
              <h1>Experience</h1>

            </div>
            <div className = 'skills'>
              <h1>Skills</h1>

            </div>
          </div>
        </div>
        </MediaQuery>
      </div>
      );
  }



}

export default Main;
