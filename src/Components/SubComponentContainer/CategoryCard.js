import React from 'react'
// import TopCategoryImg from '../../images/TopCategoryImg.png'


function CategoryCard({CategoryImg,CategoryText}) {
  return (
    <div>
      <div className='relative inline-block m-auto' >
        <img src={CategoryImg} alt="" className='block max-w-[300px]'/>
        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-lg p-[10px]'>{CategoryText}</p>
      </div>
    </div>
  )
}

export default CategoryCard
