import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import logo from "../../imgs/logo.png";
import callApi from "../../utils/callApi.js";
import './index.css';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      message: [],
      messageOne: '',
      messageTwo: '',
      messageThree: '',
      scrollPosition: window.scrollY,
      collapsedMenu: false
    }
    this.getWelcome = this.getWelcome.bind(this)
  }

  componentDidMount() {
    this.getWelcome();
  }

  getWelcome() {

    const headerContainer = document.getElementById("header-container");
    const collectionEndpoint = 'intro';

    callApi(collectionEndpoint)
      .then(welcomeMessages => {
        welcomeMessages = welcomeMessages[0].messages;
        this.setState(
          {
            messageOne: welcomeMessages[0],
            messageTwo: welcomeMessages[1],
            messageThree: welcomeMessages[2],
            message: welcomeMessages
          })
        setTimeout(() => {
          headerContainer.classList.add("expand");
          var img = document.createElement('img');
          img.setAttribute('src', logo);
          img.setAttribute('width', '50px');
          img.setAttribute('visibility', 'hidden');
          img.setAttribute('id', 'icoMenu');
          document.getElementById("logoMenu").appendChild(img);
          window.addEventListener('scroll', this.handleScroll);
          document.getElementById('icoMenu').classList.add("transitionImageIn");
          document.getElementById('icoMenu').classList.add("animated");
          document.getElementById('icoMenu').classList.add("jello");
        }, 1000)
        setTimeout(() => {
          document.getElementById('icoMenu').classList.remove("transitionImageIn");
          document.getElementById('icoMenu').classList.add("animated");
          document.getElementById('icoMenu').classList.add("jello");
        }, 3000)
        return welcomeMessages;
      })
      .catch(err => console.log('An error has occurred:', JSON.stringify(err)));
  }



  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div id="header-container">
          <div className="header-title">Recetas</div>
          <div>Productos</div>
          <div id="logoMenu">
          </div>
          <div>Pedidos</div>
          <div>Contacto</div>
        </div>
      </Animated>
    )
  }

}

export default Header;