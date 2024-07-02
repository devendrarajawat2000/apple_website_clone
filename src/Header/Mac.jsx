import React from 'react'

class Mac extends React.Component {
  render() {
    return (
      <>
        <div className='border h-[40rem] bg-blue-50'>
          <div className='mt-[6rem] '>
            <h1 className='text-6xl font-semibold ml-[4rem] text-blue-600'>  <img className='w-[550px] float-right mr-[6rem] rounded-2xl' src="https://images.pexels.com/photos/226172/pexels-photo-226172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />If you can dream it,<br /> <span className='text-orange-400'>Mac can do it.</span>
            </h1>
          </div>
          
          
        </div>
        <div>
          <video className="mt-[2rem] " controls autoPlay loop muted>
            <source
              src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className='flex justify-center items-center gap-4 flex-wrap mt-[4rem] '>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="Mac.webp" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,84,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac1.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,87,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac2.jpg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,89,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac3.jpg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,82,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac4.jpeg" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,79,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md ' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='border w-[400px] h-[450px] flex justify-center flex-col items-center p-[10px] mt-[30px]'>
            <div className='w-[320px] h-[320px]  '>
              <img className='w-[300px] h-[300px]' src="mac5.png" alt="" />
            </div>
            <h1 className='font-bold'>MacBook</h1>
            <h1 className='text-lg font-semibold text-gray-600'>Just ₹ 1,77,999</h1>
            <button className='bg-blue-500 text-white text-lg font-semibold w-[100px] h-[50px] rounded-md mt-[10px]' onClick={this.props.AddToCart}>Buy Now</button>
          </div>
          <div className='mt-[4rem]'>
            <img src="https://m.media-amazon.com/images/G/31/img20/Laptops/Apple_EYE_2020/11-11-2020/Macbook_Air/PC/Aplus/IN_r1332_Marketing-Page_L_FFH_05._CB415712569_.jpg" alt="" />
          </div>
        </div>
      </>
    )
  }
}
export default Mac;