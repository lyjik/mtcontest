import section3_icon1 from '../../assets/section3_icon1.png'
import section3_icon2 from '../../assets/section3_icon2.png'
import section3_logo1 from '../../assets/section3_logo1.png'
import section3_logo2 from '../../assets/section3_logo2.png'
import section3_logo3 from '../../assets/section3_logo3.png'
import section3_logo4 from '../../assets/section3_logo4.png'
import section3_logo5 from '../../assets/section3_logo5.png'

const Section3 = () => {
    return (
        <section className='section3'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>韩国语视频竞赛公告</h2>
                    <p><span className='EB'>竞赛期间:</span> 2024.10.28.(周一) ~ 2024.11.22.(周五)</p>
                </div>
                <div className='content1'>
                    <div className='step step1'>
                        <div className='bgc1'>第1步</div>
                        <div>
                            <h4>口语视频</h4>
                            <p>拍摄介绍您的海外法人的视频</p>
                            <p>(语言: 韩语和您的母语/韩语使用超过50%)</p>
                        </div>
                        <div>
                            <h4>描述视频</h4>
                            <p>拍摄一段视频, 向我们展示你的工作场所</p>
                            <p>(与演讲主题匹配的视频)</p>
                        </div>
                    </div>
                    <div className='imgBox'>
                        <img src={section3_icon1} alt='section3_icon1'/>
                    </div>
                    <div className='step step2'>
                        <div className='bgc1'>第2步</div>
                        <div>
                            <p>提交</p>
                            <h4>
                                视频<br></br> &<br></br> 脚本
                            </h4>
                            <div>
                                <h5>提交资讯</h5>
                                <ol>
                                    <li>视频(演讲和描述)</li>
                                    <li>演讲视频的脚本</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <h3>提交视频前请检查一下!</h3>
                    <div>
                        <div className='bgc1'>可用的CI</div>
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
                        <div className='bgc3'>不可用的CI</div>
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
                    <h3>如何提交: <span>上传至Google Drive或通过电子邮件提交</span></h3>
                    <div>
                        <div className='bgc2'>
                            <a href="mailto:hyoungjunyoo@hd.com?subject=한국어 동영상 콘테스트 참여합니다 / @참가자 이름">通过电子邮件提交 ➔</a>
                            <div className='imgBox'>
                                <img src={section3_icon2} alt='section3_icon2'/>
                            </div>
                        </div>
                        <div className='bgc2'>
                            <a href="#" target="_blank">通过Google Drive提交 ➔</a>
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