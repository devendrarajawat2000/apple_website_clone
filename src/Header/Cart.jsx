import React from 'react'

class Cart extends React.Component {

    
    render() {
        return (
            <div>
                <ul>
                  {this.props.cartItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                  ))}
                </ul>
            </div>
        )
    }
}
export default Cart;