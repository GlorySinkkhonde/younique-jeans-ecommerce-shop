import React from 'react'
import './Categories.css'
import CategoryOneImage from '../assets/images/12.png'

function Categories() {
  return (
    <div>
        <div className='shop__categories'>

            <section className='category-section'>
            
                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>
             
            </section>

            <div className='divider'></div>

        </div>

    </div>
  )
}

export default Categories