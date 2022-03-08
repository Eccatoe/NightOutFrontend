import React from 'react'

function RestaurantItem({rest}) {
    const {restaurant_name, address, price} = rest
  return (
    <div>{restaurant_name} {address} {price}</div>
  )
}

export default RestaurantItem