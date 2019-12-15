import React from 'react';
import './sidebar.styles.css'
export default function Sidebar() {
    return (
        <div className='sidebar'>

            <div className='explanation'>

                <p>Hi , I'm an self taught software engineer . i love to make cool project like this one </p>

                <a className='aboutUs' href='https://ajay-meena.in/' type='button'>
                    Blog
                        </a>

            </div>

            <div className='pseudoCode'>
                <p>Do you Like This Project , want to say Hi</p>
                <a className='contact' href='mailto:majay1638@gmail.com' type='button'>
                    Say Hello
                        </a>
            </div>
            <ul className='social'>
                <li>
                    <a href='mailto:majay1638@gmail.com'>
                        Contact Me
                        </a>
                </li>
                <li>
                    <a href='https://github.com/hacetheworld/'>
                        Github
                            </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ajay-meena1/'>
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href='https://ajay-meena.in/'>
                        Website
                    </a>
                </li>
            </ul>
        </div>
    );
}
