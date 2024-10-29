import banner_logo from '../assets/banner_logo.png'
import banner_title from '../assets/banner_title.png'
import banner_img1 from '../assets/banner_img1.png'

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className='imgBox'>
                <img src={banner_logo} alt='banner_logo'/>
            </div>
            <div className='imgBox'>
                <img src={banner_title} alt='banner_title'/>
            </div>
            <div className='bgc1'>
                <h1>Korean Video Contest</h1>
            </div>
            <p>2024.10.28 ~2024.11.22 (KST)</p>
            <div className='imgBox'>
                <img src={banner_img1} alt='banner_img1'/>
            </div>
        </div>
    )
}
  
export default Banner