import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.png';




function Home() {
    return (
        <Fragment>
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVING</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title='prideimg' />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="#">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>


    );
}


export default Home;