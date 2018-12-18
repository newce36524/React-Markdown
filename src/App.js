import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMarkdownView1 from "./components/MyMarkdownView-markdownjs";
import MyMarkdownView2 from "./components/MyMarkdownView-markedjs";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdcontent: ``
    };
    let _this = this;
    setInterval(() => {
      axios.get('https://raw.githubusercontent.com/newce36524/Newbe.Mahua.Framework/master/README.md')
        .then(function (response) {
          _this.setState({
            mdcontent: `${response.data}`
          });
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 1000);
  }
  render() {
    return (
      // <MyMarkdownView1 mdcontent={this.state.mdcontent}/> //1不如2
      <MyMarkdownView2 mdcontent={this.state.mdcontent} />
    );
  }
}

export default App;
