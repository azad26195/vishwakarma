import React, {Component} from 'react';
import '../../assets/stylesheets/base.scss';

class Container extends Component {
render(){
    const heading = '"Hello! I am Indresh Vishwakarma"';
    const subheding = '"The best thing about a boolean is even if you are wrong, you are only off by a bit"';
    const links = [
        {icon:"fa-linkedin", href:"https://www.linkedin.com/in/indreshv/"},
        {icon: "fa-facebook", href: "https://www.facebook.com/indresh26195"},
        {icon: "fa-github", href: "https://www.github.com/azad26195"},
        {icon: "fa-twitter", href: "https://twitter.com/azad26195"},
        {icon: "fa-instagram", href: "https://www.instagram.com/the_azad"}
      ]
    return (
        <div className="main">
          <div className="layer">
            <div className="title">
              <img className="avatar" src="/images/bg.JPG" />
              <h2>
                {heading}
                <br/>
                <strong>{subheding}</strong>
              </h2>
            </div>
            <div className="icon-group">
                {links.map((l,i)=> <a key={i} href={l.href} className={`icon fa ${l.icon}`} target="_blank"></a>)}
            </div>
          </div>
        </div>
    );
}
}

export default Container;
