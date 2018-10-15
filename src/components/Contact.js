import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import '../stylesheets/Contact.css';

class Contact extends Component {
  render(){
    const style = {
      padding: 5,
      backgroundColor: 'white'
    }

    return (
      <div id = "formSheet" >

        <h1 id = 'contactMe' >CONTACT ME</h1>

        <form>

          <Input style = {style} type="text" id="Name" name="uname" required
               minLength="4" maxLength="8"
               placeholder= "Name" />
          <br/>
          <br/>

          <Input style = {style} type="text" id="Email" name="uname" required
               minLength="4" maxLength="8"
               placeholder= "Email" />

          <br/>
          <br/>

          <Input style = {style} type="text" id="Message" name="uname" required
               minLength="4" maxLength="8"
               placeholder= "Message" />

          <br/>
          <br/>

          <div id = "Submit">

          {
            //The submit buttons needs to be left aligned reltiave to super Div
          }
            <Button variant = "contained" color = "primary" >
            Submit
            </Button>
          </div>


        </form>


      </div>

    );
  }



}


export default Contact;
