import section3_icon3 from '../assets/section3_icon3.png'

const Section3_1 = () => {
    return (
        <section className='section3_1'>
            <div className='sectionWarp'>
                <div className='content'>
                    <div className='step'>
                        <div className='bgc1'>1</div>
                        <h5>Video<br></br> submission Period</h5>
                        <p>2024.10.28. ~ 11.22.</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>2</div>
                        <h5>Finalist<br></br> selectio period</h5>
                        <p>Early December</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>3</div>
                        <h5>Final winner<br></br> selection period</h5>
                        <p>Mid-December</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>4</div>
                        <h5>Winner<br></br> Announcement</h5>
                        <p>Late December</p>
                    </div>
                </div>
                <div className='textBox'>*The schedule may change, with updates procided in advance</div>
            </div>
        </section>
    )
}
  
export default Section3_1