import section6_logo1 from '../assets/section6_logo1.png'
import section6_logo2 from '../assets/section6_logo2.png'
import section6_logo3 from '../assets/section6_logo3.png'
import section6_logo4 from '../assets/section6_logo4.png'
import section6_logo5 from '../assets/section6_logo5.png'

const Section6 = () => {
    return (
        <section className='section6'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>Notice</h2>
                </div>
                <div className='content'>
                    <div>
                        <h3>Contest</h3>
                        <p className='text3'>Global HR Team: Hyoungjun YOO, Manager ( <a href="mailto:hyoungjunyoo@hd.com">hyoungjunyoo@hd.com</a> )</p>
                    </div>
                    <div>
                        <h3>Submission Contents and Format</h3>
                        <div>
                            <p className='text2'>-Contents: All 3 contents must be submitted</p>
                            <p className='text1'>(If any submission is missing, additional submission may be requested.)</p>
                            <p className='text3'>1) Sketch Video(mp4, avi, mkv etc. video file)</p>
                            <p className='text3'>2) SpeakingVideo(mp4, avi, mkv etc. video file)</p>
                            <p className='text3'>3) Speaking Video Script (word or other document file)</p>
                        </div>
                    </div>
                    <div>
                        <h3>Language for the Speaking Video</h3>
                        <div>
                            <p>-Korean and nativelanguagecanbothbeused.</p>
                            <p>-However, atleast 50% of thevideomustbeinKorean</p>
                            <p className='text1'>(If less than 50% is in Korean, points will be deducted during grading.)</p>
                        </div>
                    </div>
                    <div>
                        <h3>Filming and Video Submission Guidelines</h3>
                        <div>
                            <h4>*Filming Guidelines</h4>
                            <p>1) If filming with a phone, film in landscape mode with a clean and quiet background.</p>
                            <p className='marginText'>2) A resolution of 720p or higher is recommended</p>
                            <h4>*Video Guidelines</h4>
                            <p>1) If the submitted or uploaded video file does not play, you may be asked to resend the file.</p>
                            <p>2) The oldcompanyCI must not be shown in the video (If shown, the submission will be disqualified).</p>
                            <div className='logoBox'>
                                <p>- Allowed CI :</p>
                                <div>
                                    <div className='imgBox'>
                                        <img src={section6_logo1} alt='section6_logo1'/>
                                    </div>
                                    <div className='imgBox'>
                                        <img src={section6_logo2} alt='section6_logo2'/>
                                    </div>
                                    <div className='imgBox'>
                                        <img src={section6_logo3} alt='section6_logo3'/>
                                    </div>
                                </div>
                            </div>
                            <div className='logoBox'>
                                <p>- Prohibited CI :</p>
                                <div>
                                    <div className='imgBox'>
                                        <img src={section6_logo4} alt='section6_logo4'/>
                                    </div>
                                    <div className='imgBox'>
                                        <img src={section6_logo5} alt='section6_logo5'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Prizes and Awards</h3>
                        <div>
                            <p>-The winner will be announced in late December.</p>
                            <p>-Winners will be contacted individually.</p>
                            <p>-The announcement date for winners may change due to internal circumtances.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Section6