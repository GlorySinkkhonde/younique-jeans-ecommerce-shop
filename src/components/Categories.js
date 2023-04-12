import React from 'react'
import './Categories.css'

function Categories(props) {
  return (
    <div>
        <div className='shop__categories'>

            <section className='category-section'>
            
                <div className='category'>
                    <img src={props.image} alt='' />
                    <div>
                        <h4>{props.categoryname}</h4>
                    </div>
                </div>

            </section>

        </div>

    </div>
    
  )
}

export default Categories