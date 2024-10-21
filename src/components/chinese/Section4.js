import section4_Img1 from '../../assets/section4_Img1.png'

const Section4 = () => {
    return (
        <section className='section4'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>冠军奖</h2>
                    <p>冠军将获得一张GTP机票!</p>
                </div>
                <div className='imgBox'>
                    <img src={section4_Img1} alt='section4_Img1'/>
                </div>
                <div className='content'>
                    <div className='prize'>
                        <div className='bgc1'>一等奖</div>
                        <div>
                            <div>GTP机票<span>(往返机票、酒店和GRC参观)</span></div>
                            <div className='qty'>1数量</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>二等奖</div>
                        <div>
                            <div>Galaxy Tab</div>
                            <div className='qty'>2数量</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>三等奖</div>
                        <div>
                            <div>韩国化妆品套装</div>
                            <div className='qty'>3数量</div>
                        </div>
                    </div>
                    <div className='prize'>
                        <div className='bgc1'>参与奖</div>
                        <div>
                            <div>特别奖</div>
                            <div className='qty'>全部</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Section4