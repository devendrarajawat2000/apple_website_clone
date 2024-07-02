import React from 'react'

class AirPods extends React.Component {
  render() {
    return (
      <>
         <div className='border h-[30rem]  bg-blue-50 '>
          <h1 className='text-6xl font-semibold text mt-[8rem] text-center text-red-600'>	Discover a new level of sound.</h1>
          <h1 className='text-center text-9xl mt-[4rem]'>Air Pods</h1>
        </div>
        <div>
          <video className="mt-[2rem] " controls autoPlay loop muted>
            <source
              src="https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large_2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[4rem] '>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 19,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods1.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 21,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods2.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 24,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods3.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 26,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPods4.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 29,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="AirPodsMax.jpg" alt="" />
            </div>
            <h1 className='font-bold'>AirPods Max</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 74,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='mt-[4rem]'>
            <img src="https://m.media-amazon.com/images/G/31/img20/Wireless/WLA/July/Headsets/AirPods/River_images/IN_AMZ_AirPods_Wired_Desktop_03._CB408311276_.jpg" alt="" />
          </div>
        </div>
      </>
    )
  }
}
export default AirPods;