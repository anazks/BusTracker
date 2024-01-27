import React from 'react'
import './map.css'
function Map() {
  return (
    <>
      <div className='map'>
            <iframe className='mapPLot' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15721.77484984981!2d76.282667!3d9.8969529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703909757856!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="email">
                  <input type="email"  name='email' placeholder='Enter your email'/>
                  <input type="submit"  value="subscribe" className='subscribe'/>
            </div>
    </div>
    
    </>
  )
}

export default Map