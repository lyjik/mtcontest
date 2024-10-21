import section3_icon3 from '../../assets/section3_icon3.png'

const Section3_1 = () => {
    return (
        <section className='section3_1'>
            <div className='sectionWarp'>
                <div className='content'>
                    <div className='step'>
                        <div className='bgc1'>1</div>
                        <h5>视频提交期限</h5>
                        <p>2024.10.28. ~ 11.22.</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>2</div>
                        <h5>决赛选拔期限</h5>
                        <p>12月初旬</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>3</div>
                        <h5>最终获胜者选拔期限</h5>
                        <p>12月中旬</p>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon3} alt='section3_icon3'/>
                    </div>
                    <div className='step'>
                        <div className='bgc1'>4</div>
                        <h5>获胜者公告</h5>
                        <p>12月下旬</p>
                    </div>
                </div>
                <div className='textBox'>*时间表可能会有变动，如有变更将另行通知。</div>
            </div>
        </section>
    )
}
  
export default Section3_1