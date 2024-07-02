import React from 'react'

class Support extends React.Component {
  render() {
    return (
      <>
      <div className='flex flex-wrap justify-center bg-gray-100 mt-[5rem] gap-32 '>
        <div>
           <h1 className='text-black text-lg font-semibold mt-4'>Product Support</h1>
           <p>Mac</p>
           <p>Ipad</p>
           <p>Iphone</p>
           <p>Watch</p>
           <p>AirPods</p>
        </div>
        <div>
          <h1 className='text-black text-lg font-semibold mt-4'>Service and Repair</h1>
          <p>Apple Repair Options</p>
          <p>Service and Repair Information</p>
          <p>AppleCare Products</p>
          <p>Hardware Warranties</p>
          <p>Software License Agreements</p>
          <p>Complimentary Support</p>
        </div>
        <div>
          <h1 className='text-black text-lg font-semibold mt-4'>Resources</h1>
          <p>My Support</p>
          <p>Product Documentation</p>
          <p>Accessibility</p>
        </div>
        <div>
          <h1 className='text-black text-lg font-semibold mt-4'>Connect</h1>
          <p>Contact Us</p>
          <p>Phone Numbers</p>
          <p>Support app</p>
          <p>Apple Communities</p>
          <p>@AppleSupport</p>
        </div>
        </div>
      </>
    )
  }
}
export default Support;