import section1_logo from '../assets/section1_logo.png'
import section1_title from '../assets/section1_title.png'
import section1_bg2 from '../assets/section1_bg2.png'

const Section1 = () => {
    return (
        <section className='section1'>
            <div className='sectionWarp'>
                <div className='imgBox'>
                    <img src={section1_logo} alt='section1_logo'/>
                </div>
                <div className='bgc1'>
                    <h1>Korean Video Contest</h1>
                </div>
                <div className='imgBox'>
                    <img src={section1_title} alt='section1_title'/>
                </div>
                <div className='imgBox videoContainer'>
                    <div className='videoBox'></div>
                    <img src={section1_bg2} alt='section1_bg2'/>
                </div>
            </div>
        </section>
    )
}
  
export default Section1