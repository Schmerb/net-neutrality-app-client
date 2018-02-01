// // // // // // // // // //
//
//       About Project
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect }    from 'react-redux';
import { Link } from 'react-router-dom';

export class AboutProjectPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            slideIn: ''
        };
    }

    componentWillMount() {
        document.body.classList.add('about-page');
    }
    
    componentDidMount() {
        window.scrollTo(0,0); // bring user to top of page
        setTimeout(() => {
            this.setState({ slideIn: 'slideIn' });
        }, 200);
    }

    componentWillUnmount() {
        document.body.classList.remove('about-page');
    }

    render() {
        return(
            <div className={`about-project-page ${this.state.slideIn}`}>
                <p className="left">This project was created by <Link to="https://www.thinkful.com" target="_blank">Thinkful</Link>, a new type of school which provides 1-on-1 learning with industry experts to bring high growth tech careers to ambitious people everywhere. We are educators and technologists who urge congress to permanently reinstate the 2015 net neutrality regulations.</p>
    
                <p className="right"><Link to="https://www.mikeschmerbeck.com" target="_blank">Mike Schmerbeck</Link>, a recent Thinkful graduate, built this site using the <Link to="http://mern.io/" target="_blank">MERN</Link> stack. A free and open internet allowed Mike to pursue his dream to become a web developer.</p>
    
                <div className="contact-info">
                    <p className="left">For press inquiries, please email Robin Olsen, Thinkful's Head of Communications at <Link to="mailto:robin.olsen@thinkful.com">robin.olsen@thinkful.com</Link>.</p>
    
                    <p className="right">If you are a candidate and would like to add or modify your listed position, please email Adam Levenson at <Link to="mailto:adam.levenson@thinkful.com">adam.levenson@thinkful.com</Link>.</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.display.loading
});

export default connect(mapStateToProps)(AboutProjectPage);