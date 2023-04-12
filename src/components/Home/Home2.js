import React from 'react'
import icon1 from '../../assets/Home2/Vector.png'
import icon3 from '../../assets/Home2/Vector (1).png'
import icon2 from '../../assets/Home2/Vector (2).png'

const Home2 = () => {

  const arrayObj = [
    {
      title : '1.2M FOLLOWERS',
      description : 'Lorem ipsum dolor sit amet consectetur. Quam fames ornare viverra habitant pretium rhoncus sit. Ornare lacinia proin enim nam feugiat a arcu arcu sed..',
      image : `${icon1}`
    },
    {
      title : '88M VIEWS',
      description : 'Lorem ipsum dolor sit amet consectetur. Quam fames ornare viverra habitant pretium rhoncus sit. Ornare lacinia proin enim nam feugiat a arcu arcu sed..',
      image : `${icon2}`
    },
    {
      title : '1.7K DOWNLOADS',
      description : 'Lorem ipsum dolor sit amet consectetur. Quam fames ornare viverra habitant pretium rhoncus sit. Ornare lacinia proin enim nam feugiat a arcu arcu sed..',
      image : `${icon3}`
    }
  ]
  return (
    <>
    {
      arrayObj.map((item,index) => {
        return (
          <div className='home2-box' key={index}>

        <div className='icon-outer-bg'>
            <div className='icon-inner-bg'>
            <img src={item.image} alt="icon" />
            </div>
        </div>
        <div className='text-wrapper'>
            <h4 className='box-title'>{item.title}</h4>
            <p className='box-description'>{item.description}</p>
        </div>
    </div>
        )
      })
    }
    </>
  )
}

export default Home2