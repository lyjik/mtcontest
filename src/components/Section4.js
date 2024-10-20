import section4_Img1 from '../assets/section4_Img1.png'

const Section4 = () => {
    return (
        <section className='section4'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>Winners’ Prize</h2>
                    <p>Top winner gets a GTP ticket!</p>
                </div>
                <div className='imgBox'>
                    <img src={section4_Img1} alt='section4_Img1'/>
                </div>
                <div className='content'>
                    <div className='prize'>
                        <div className='bgc1'>1st Prize</div>
                        <div>
                            <div>GTP Ticket</div>
                            <div className='qty'>1 QTY</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>2nd Prize</div>
                        <div>
                            <div>Galaxy Tab</div>
                            <div className='qty'>2 QTY</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>3rd Prize</div>
                        <div>
                            <div>Korean Cosmetic Set</div>
                            <div className='qty'>3 QTY</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>Participation Prize</div>
                        <div>
                            <div>Special Prize</div>
                            <div className='qty'>All</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Section4