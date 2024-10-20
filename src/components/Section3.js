import section3_icon1 from '../assets/section3_icon1.png'
import section3_icon2 from '../assets/section3_icon2.png'
import section3_logo1 from '../assets/section3_logo1.png'
import section3_logo2 from '../assets/section3_logo2.png'
import section3_logo3 from '../assets/section3_logo3.png'
import section3_logo4 from '../assets/section3_logo4.png'
import section3_logo5 from '../assets/section3_logo5.png'

const Section3 = () => {
    return (
        <section className='section3'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>Korean Video Contest Announcement</h2>
                    <p><span className='EB'>Contest Period:</span> 10.28. (Mon) ~ 11.22. (Fri)</p>
                </div>
                <div className='content1'>
                    <div className='step step1'>
                        <div className='bgc1'>Step 1</div>
                        <div>
                            <h4>Speaking Video</h4>
                            <p>Film a video of you introducing your branch</p>
                            <p>(Language: Korean & Your native language / Over 50% Korean usage)</p>
                        </div>
                        <div>
                            <h4>Sketch Video</h4>
                            <p>Film a video showing us your workplace</p>
                            <p>(Video matching the speaking topic)</p>
                        </div>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon1} alt='section3_icon1'/>
                    </div>
                    <div className='step step2'>
                        <div className='bgc1'>Step 2</div>
                        <div>
                            <p>Submit</p>
                            <h4>
                                Video<br></br> &<br></br> Script
                            </h4>
                            <div>
                                <h5>Submission Contents</h5>
                                <ol>
                                    <li>Video (Speaking & Sketch)</li>
                                    <li>Script for the speaking Video</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <h3>Check before submitting your video!</h3>
                    <div>
                        <div className='bgc1'>Available CI</div>
                        <div>
                            <div className='imgBox'>
                                <img src={section3_logo1} alt='section3_logo1'/>
                            </div>
                            <div className='imgBox'>
                                <img src={section3_logo2} alt='section3_logo2'/>
                            </div>
                            <div className='imgBox'>
                                <img src={section3_logo3} alt='section3_logo3'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bgc3'>Unavailable CI</div>
                        <div>
                            <div className='imgBox'>
                                <img src={section3_logo4} alt='section3_logo4'/>
                            </div>
                            <div className='imgBox'>
                                <img src={section3_logo5} alt='section3_logo5'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content3'>
                    <h3>How to submit: <span>Upload to Google Drive or sunmit via email</span></h3>
                    <div>
                        <div className='bgc2'>
                            <a href="mailto:hyoungjunyoo@hd.com?subject=한국어 동영상 콘테스트 참여합니다 / @참가자 이름">Submit by email ➔</a>
                            <div className='imgBox'>
                                <img src={section3_icon2} alt='section3_icon2'/>
                            </div>
                        </div>
                        <div className='bgc2'>
                            <a href="#" target="_blank">Submit via Google Drive ➔</a>
                            <div className='imgBox'>
                                <img src={section3_icon2} alt='section3_icon2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Section3