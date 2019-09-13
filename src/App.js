import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Animation} from './Animation';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="#">
                <h2>Enter Text</h2>
              </a>
            </div>
      
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4">
              <ul className="navbar-nav justify-content-center">
              </ul>
            </div>
      
            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><i className="fab fa-github"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fab fa-google"></i></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"> <img width = '30' height = '30' src="./avatar.png"/> </a>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    
      <header className="App-header fdb-block">
        <Animation speed={0.012} />
      </header>

     


      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <h2>About</h2>
              <p className="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-block">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2>Work</h2>
            </div>
          </div>
          <div className="row text-left mt-5">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-3">
                  <img alt="image" className="fdb-icon" src="./icons/gift.svg" />
                </div>
                <div className="col-9">
                  <h3><strong>Feature One</strong></h3>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                </div>
              </div>
            </div>
      
            <div className="col-12 col-md-6 pt-3 pt-sm-4 pt-md-0">
              <div className="row">
                <div className="col-3">
                  <img alt="image" className="fdb-icon" src="./icons/cloud.svg" />
                </div>
                <div className="col-9">
                  <h3><strong>Feature Two</strong></h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                </div>
              </div>
            </div>
      
            <div className="col-12 col-md-6 pt-3 pt-sm-4 pt-md-0">
              <div className="row">
                <div className="col-3">
                  <img alt="image" className="fdb-icon" src="./icons/map-pin.svg" />
                </div>
                <div className="col-9">
                  <h3><strong>Feature Three</strong></h3>
                  <p>A small river named Duden flows by their place and supplies it</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-3">
                  <img alt="image" className="fdb-icon" src="./icons/gift.svg" />
                </div>
                <div className="col-9">
                  <h3><strong>Feature One</strong></h3>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <h2>Writing</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-8 pt-3 pt-sm-4 pt-md-0">
              <div className="row">
                <div className="col-2">
                  <img alt="image" className="fdb-icon" src="./icons/map-pin.svg"/>
                </div>
                <div className="col-10">
                  <h3><strong>Feature Three</strong></h3>
                  <p>A small river named Duden flows by their place and supplies it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="fdb-block footer-small">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <p>© 2019. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
