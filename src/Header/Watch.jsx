import React from 'react'

 class Watch extends React.Component {
  render() {
    return (
      <>
        <div className='border h-[30rem]  bg-blue-50 '>
          <h1 className='text-6xl font-semibold text mt-[8rem] text-center text-pink-700'>To wear it is to love it.</h1>
          <h1 className='text-center text-9xl mt-[4rem]'>Apple Watch</h1>
        </div>
        <div>
        <video className="mt-[2rem] "   controls autoPlay loop muted>
      <source
        src="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4"
        type="video/mp4" 
      />
    </video>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[15px] '>
        <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 22,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch1.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 24,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch2.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 26,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch3.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 29,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch4.jpg" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 21,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Watch5.webp" alt="" />
            </div>
            <h1 className='font-bold'>Watch</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 25,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/G/31/img21/Wearables/Apple/NPI_2022/SE_LTE/Apple_Watch_SE_LTE_Product_Page_Flex_Module_Avail_Amazon_Desktop__en-IN_01._CB626547557_.jpg" alt="" />
          </div>
          <div>
            <video controls autoPlay loop muted > 
            <source src="https://videos.pexels.com/video-files/4384187/4384187-hd_1920_1080_30fps.mp4" /> </video>
          </div>
      </>
    )
  }
}
export default Watch;





