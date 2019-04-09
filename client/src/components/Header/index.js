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
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    this.getWelcome();
  }

  getWelcome() {

    const headerTitle = document.getElementById("header-title");
    const headerContainer = document.getElementById("header-container");
    const collectionEndpoint = 'intro';

    callApi(collectionEndpoint)
      .then(welcomeMessages => {
        welcomeMessages=welcomeMessages[0].messages;
        this.setState(
          {
            messageOne: welcomeMessages[0],
            messageTwo: welcomeMessages[1],
            messageThree: welcomeMessages[2],
            message: welcomeMessages
          })
        setTimeout(() => {
          headerTitle.classList.add("animated");
          headerTitle.classList.add("fadeIn")
          headerTitle.innerHTML = this.state.messageOne;
        }, 2000)
        setTimeout(() => {
          headerTitle.classList.remove("animated");
          headerTitle.classList.remove("fadeIn");
        }, 3000)
        setTimeout(() => {
          headerTitle.classList.add("animated");
          headerTitle.classList.add("fadeIn");
          headerTitle.innerHTML = this.state.messageTwo;
        }, 5000)
        setTimeout(() => {
          headerTitle.classList.remove("animated");
          headerTitle.classList.remove("fadeIn");
        }, 6000)
        setTimeout(() => {
          headerTitle.innerHTML = this.state.messageThree;
          headerTitle.classList.add("animated");
          headerTitle.classList.add("fadeIn");
        }, 8000)
        setTimeout(() => {
          headerContainer.classList.add("expand");
          headerTitle.classList.add("animated");
          headerTitle.classList.add("fadeIn");
        }, 10000)
        setTimeout(() => {
          var img = document.createElement('img');
          img.setAttribute('src', logo);
          img.setAttribute('width', '50px');
          img.setAttribute('visibility', 'hidden');
          img.setAttribute('id', 'icoMenu');
          document.getElementById("logoMenu").appendChild(img);
          window.addEventListener('scroll', this.handleScroll);
          document.getElementById('icoMenu').classList.add("transitionImageIn");
        }, 12000)
        setTimeout(() => {
          document.getElementById('icoMenu').classList.remove("transitionImageIn");
          document.getElementById('icoMenu').classList.add("animated");
          document.getElementById('icoMenu').classList.add("jello");
        }, 13000)
        return welcomeMessages;
      })
      .catch(err => console.log('An error has occurred:', JSON.stringify(err)));
  }

  handleScroll = (event) => {
    const headerContainer = document.getElementById("header-container");
    const image_ico = document.getElementById('icoMenu');
    if (window.scrollY > this.state.scrollPosition) {
      headerContainer.classList.remove("expand");
      headerContainer.classList.add("collapse");
      image_ico.classList.remove("transitionImageIn");
      image_ico.classList.add("transitionImageOut");
      image_ico.classList.add("jello");
      image_ico.setAttribute('opacity', '0');
      this.setState(
        {
          collapsedMenu: true
        })
    } else {
      headerContainer.classList.remove("collapse");
      headerContainer.classList.add("expand");
      document.getElementById("icoMenu").classList.remove("transitionImageOut");
      document.getElementById("icoMenu").classList.add("transitionImageIn");
    }
  };

  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div id="header-container">
          <div id="header-title">
            Hola
          </div>
          <div id="logoMenu">
          </div>
        </div>
      </Animated>
    )
  }

}

export default Header;