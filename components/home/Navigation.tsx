import React, { ReactElement } from 'react'

const Navigation: React.FC = (): ReactElement => {
    return (
        <nav>
            <ul>
                <li>
                    <button>Cart</button>
                </li>
                <li>
                    <button>Carrito</button>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>


        </nav>
    )
};

export default Navigation;
