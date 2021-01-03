import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
   getRandomBackground(){
      var RandomNumber = Math.floor(Math.random() * 8)+1 ; 
      var background = "" ; 
      if (RandomNumber===1){
         background = "color"
         return background
      }
      else if (RandomNumber===2){
         background = "lines"
         return background
      }
      else if (RandomNumber===3){
         background = "lines"
         return background
      }
      else if (RandomNumber===4){
         background = "thick"
         return background
      }
      else if (RandomNumber===5){
         background = "fountain"
         return background
      }
      else if (RandomNumber===6){
         background = "polygon"
         return background
      }
      else if (RandomNumber===7){
         background = "square"
         return background
      }
      else if (RandomNumber===8){
         background = "fountain"
         return background
      }


   }
  render() {

    if(this.props.data){
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
     
    }

    return (
      <header id="home">
      <ParticlesBg type={this.getRandomBackground()} bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
   
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
