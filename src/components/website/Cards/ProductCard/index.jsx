import React from 'react'

const ProductCard = ({ data }) => {
  const { title, price, image } = data
  return (
    <div class="product__item">
      <div class="product__item__pic set-bg" style={{ backgroundImage: `url(https://via.placeholder.com/300x300)` }}>
        <ul class="product__item__pic__hover">
          <li><a href="#!"><i class="fa fa-heart"></i></a></li>
          <li><a href="#!"><i class="fa fa-retweet"></i></a></li>
          <li><a href="#!"><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
      </div>
      <div class="product__item__text">
        <h6><a href="#!">{title || 'Product Title'}</a></h6>
        <h5>${price || 0}</h5>
      </div>
    </div>
  )
}

export default ProductCard