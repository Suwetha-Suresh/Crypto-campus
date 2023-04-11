import React from 'react'
import profile from './pic-1.jpg'
import Certificate from './Certificate';

function Profile(props) {
    let { name, title, bio, profilePic } = props;
    name="Sarah"
    title="Computer Science Student"
    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum, tellus eget cursus lobortis, justo mauris sollicitudin enim, eu vehicula ipsum nibh sit amet urna."
    profilePic=profile
  
    return (
        <div>
            <div  className='ui raised very padded text container segment ' style={{marginTop:'30px'}}>
                <div className="profile">
                    <img src={profilePic} alt={name} className="profile-pic" />
                    <div className="profile-info">
                    <h1 className="profile-name">{name}</h1>
                    <h2 className="profile-title">{title}</h2>
                    <p className="profile-bio">{bio}</p>
                    </div>
                </div>
            </div>
            <div  className='ui raised very padded text container segment ' style={{marginTop:'30px'}}>
                <h2>Certificates</h2>
                <Certificate 
                    name='JAVAScript' 
                    org='GUVI' 
                    comment='Basics of HTML,CSS and JavaScript concepts such as Hoisting, Function Expressions and Classes.' 
                />
                <Certificate 
                    name='React Crash Course' 
                    org='Udemy' 
                    comment='React and Redux Toolkit, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax' 
                />
                <Certificate 
                    name='Certified Blockchain Course' 
                    org='Henry Harvin' 
                    comment='Build Bitcoin apps by utilizing tools like Truffle, Geth, Ganache, etc' 
                />
            </div>

        </div>
              
    );
  }

export default Profile