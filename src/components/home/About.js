import React, { Component } from 'react';
import './About.css'
// Author: Lauren Riddle
// Purpose: To create the About Us component


class AboutUs extends Component {
    render() {
        return (
            <section className="about-us">
                <h1 className="hello">Meet Cohort 36!</h1>
                
                <p className="about-paragraph">With a diverse array of people from many different industries, our work experience includes that of military veterans, writers, musicians, IT professionals, graphic designers, medics, food service professionals, salespeople, librarians, stay-at-home moms, and more. We come from many different backgrounds, but we all have something in common. We are a <span className="charater-traits-yellow">passionate, hardworking, problem solving</span> group of people who came together for the experience of a lifetime. <br /><br />Six months ago, we set out to conquer ReactJS, JavaScript, Python, and Django. Throughout our journey, we laughed together, failed together, triumphed together, learned how to learn together, and we became family. We have grown not only as developers, but also as humans, realizing that the sky is the limit if you have <span className="charater-traits-blue">determination</span> and an <span className="charater-traits-blue">endless thirst for learning</span>. Now we are ready to channel our passion for software development into jobs where we can continue learning and making a difference.<br/></p>
                <h3>We are software developers. </h3><h2>We are Cohort 36.</h2>
            </section>
        )
    }
}

export default AboutUs;