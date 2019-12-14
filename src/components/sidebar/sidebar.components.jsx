import React from 'react';
import './sidebar.styles.css'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='pseudoCode'>
                <p>Click Here For See Merge Sort Pseudo Code</p>
                <button >Pseudo Code</button>
            </div>
            <div className='explanation'>
                <p>Click Here For See Merge Sort Explanation</p>

                <button >Explanation</button>
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
                    <a href='https://hacetheworld.github.io/'>
                        Website
                    </a>
                </li>
            </ul>
        </div>
    );
}
