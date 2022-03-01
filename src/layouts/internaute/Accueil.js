import React, { Component } from 'react'
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';
import IndexMain from './IndexMain';
import '../../assets/internaute/css/accueil.css';


export default class Accueil extends Component {
  render() {
    return (
      <div>
        <IndexHeader/> 
        <br/>
        <IndexMain/>
        <IndexFooter/>
      </div>
    )
  }
}
