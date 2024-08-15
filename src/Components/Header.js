import React from 'react';

function Header () {
    return (
        <div className="header">
            <div className="innerHeader">
                <div className="logoImg">
                    <img src="../../blueCalculator.jpg" />
                </div>
                <div className="logoName">
                    <h2>Easy</h2>
                    <h2>Calc</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;