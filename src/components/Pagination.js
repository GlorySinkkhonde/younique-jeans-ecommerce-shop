import React from 'react'
import './Pagination.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'


function Pagination() {
  return (
    <div className='pagination'>
      <div className='pagination__arrow-back'>
        <span> <IoIosArrowBack /> </span>
      </div>

      <div className='pagination__page-numbers'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
      </div>
      

      <div className='pagination__arrow-next'>
        <span> <IoIosArrowForward /> </span>
      </div>
    </div>
  )
}

export default Pagination