import React from 'react';
import GhibliImg from '../assets/logo.png';

const Header = (props) => {
    return (
        <React.Fragment>
            <div>
                <div className="jumbotron jumbotron-fluid text-center">
                    <div className="container">
                        <img src={GhibliImg} alt="Ghibli" style={{ width: '600px' }} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;