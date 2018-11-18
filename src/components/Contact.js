import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
import '../stylesheets/Contact.css';

//images
import me from '../images/me2.jpeg';
import email from '../icon/email.png';


class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = {
        renderTAB: false

      };
    }

    componentDidMount = () => {
      window.addEventListener('scroll',this.increase);
      }

    increase = () => {
        let responseH = 0;
        responseH += window.scrollY;

        if (responseH > window.innerHeight/4){
          this.animate();
          console.log('animating...');
          this.setState({renderTAB: true});
          setTimeout(window.removeEventListener('scroll',this.increase), 1000)

        }
    }

    animate = () => {
      let bar = document.getElementById('testing123');
      bar.setAttribute('class','aboutme');

    }

  render(){
    const style = {
      main: {
        backgroundColor: 'white',
        fontColor: '#636868;',
        paddingBottom: '5vw',
        marginTop: '-15vw',
        fontFamily: 'DinRegular, sans-serif',
        paddingTop: "8vw",
        fontWeight: 400,
        height: 'auto',
        borderColor: 'white'
      },

      intro: {
        backgroundColor: 'white',
      },

      quote: {
        textAlign: 'left'
      }
    }

    return (
      <div style = {style.main}>
      <div id = 'testing123' style = {{backgroundColor: '#e8efef',fontColor: '#e8efef',Color: '#e8efef'}}>
      {this.state.renderTAB ? <div id = 'slider' style = {{fontColor: '#e8efef'}}>
      <h1 style = {{fontColor: '#e8efef'}}> ABOUT ME</h1>
      </div> : null }
      </div>
        <div style = {style.intro} className = 'intro'>
          <div id = 'data'>
              <img style = { style.goku } id = 'goku' src = {me}/>
              <p id = 'para' style = {style.quote}>An avid learner and self-taught developer looking to broaden his knowledge and experience in the field of Software Engineering and Technology. <br/><br/>From a young age, I have always been interested in technology and the mechanisms that allow it to work. I thoroughly enjoy learning the fundamentals, but also love <span style = {{fontWeight: 600}}> practical </span> application. I relish the opportunity to tackle a complex problem and create unique solutions. </p>

          </div>
          <div id = 'container'>
            <div id = 'data1'>
                <p><span style = {{fontWeight: 'bold', color:'#0c1a2d'}}>Name</span>: Omer Khan<br/>
                <span style = {{fontWeight: 'bold', color:'#0c1a2d'}}>Age</span>: 20<br/>
                <span style = {{fontWeight: 'bold', color:'#0c1a2d'}}>Interests</span>: Philosophy, Football, Calisthenics & Programming</p>
            </div>
          </div>

        </div>
          {/*<div className = 'email'>
            <div className = "containerThing">
              <img src = {email}/>
              <p>
                omer.khan.17@ucl.ac.uk
              </p>
            </div>
          </div>*/}




      </div>

    );
  }



}


export default Contact;
