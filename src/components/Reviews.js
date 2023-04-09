import React from 'react'
import './Reviews.css'
import JohnSmith from '../assets/images/john-smith.jpg'
import { AiFillStar } from 'react-icons/ai'

function Reviews() {
  return (
  <>

    <h2 className='reviews__header'>Reviews</h2> 

    <div className='reviews__wrapper'>

      <div className='reviews'>
      
      <div className='slide__back'></div>
      
      <div className='reviews__container'>
          <div className='reviwer__info'>
              <img src={JohnSmith} alt='' />
              <div>
                  <span>
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                  </span>
                  <h4>18/08/2022 via Google</h4>
              </div>
          </div>
      
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas</p>
      </div>
      
      <div className='slide__forward'></div>
      
      </div>

      <div className='reviews'>
      
      <div className='slide__back'></div>
      
      <div className='reviews__container'>
          <div className='reviwer__info'>
              <img src={JohnSmith} alt='' />
              <div>
                  <span>
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                  </span>
                  <h4>18/08/2022 via Google</h4>
              </div>
          </div>
      
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas</p>
      </div>
      
      <div className='slide__forward'></div>
      
      </div>

      <div className='reviews'>
      
      <div className='slide__back'></div>
      
      <div className='reviews__container'>
          <div className='reviwer__info'>
              <img src={JohnSmith} alt='' />
              <div>
                  <span>
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                     <AiFillStar /> 
                  </span>
                  <h4>18/08/2022 via Google</h4>
              </div>
          </div>
      
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas</p>
      </div>
      
      <div className='slide__forward'></div>
      
      </div>

    </div>
  </>
  )
}

export default Reviews