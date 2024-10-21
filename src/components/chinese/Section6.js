import section6_logo1 from '../../assets/section6_logo1.png'
import section6_logo2 from '../../assets/section6_logo2.png'
import section6_logo3 from '../../assets/section6_logo3.png'
import section6_logo4 from '../../assets/section6_logo4.png'
import section6_logo5 from '../../assets/section6_logo5.png'

const Section6 = () => {
    return (
        <section className='section6'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>注意事项</h2>
                </div>
                <div className='content'>
                    <div>
                        <h3>Contest</h3>
                        <p className='text4'>Global HR部柳亨俊经理 ( <a href="mailto:hyoungjunyoo@hd.com">hyoungjunyoo@hd.com</a> )</p>
                    </div>
                    <div>
                        <h3>提交内容和形式</h3>
                        <div>
                            <p className='text2'>-提交内容: 3种都需要提交 <span className='text1'>(提交项目不足时可要求追加提交)</span></p>
                            
                            <p className='text3'>1) 描述视频 (mp4、avi、 mkv 等视频文件) </p>
                            <p className='text3'>2) 演讲视频 (mp4、avi、 mkv 等视频文件) </p>
                            <p className='text3'>3) 演讲视频脚本 (word等脚本原稿文件)</p>
                        </div>
                    </div>
                    <div>
                        <h3>使用演讲视频语言</h3>
                        <div>
                            <p>-韩国语、本国语都可以使用</p>
                            <p>-但是, 韩国语至少使用50% <span className='text1'>(使用50%以下韩语时, 评分时扣分)</span></p>
                        </div>
                    </div>
                    <div>
                        <h3>拍摄和视频提交注意事项</h3>
                        <div>
                            <h4>*拍摄时的注意事项</h4>
                            <p>1) 手机拍摄时, 在干净安静的背景下横向拍摄。</p>
                            <p className='marginText'>2) 推荐720p以上的高画质。</p>
                            <h4>*提交视频时的注意事项</h4>
                            <p>1) 提交和上传的视频文件无法播放时, 可要求重新传送文件수。</p>
                            <p>2) 禁止暴露旧组合CI (暴露旧组合CI时, 将被淘汰处理) 。</p>
                            <div className='logoBox'>
                                <p>- 禁止使用CI :</p>
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
                                <p>- 可以使用CI :</p>
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
                        <h3>奖品和颁奖</h3>
                        <div>
                            <p>-预定个别联系优秀作品选定者。</p>
                            <p>-优秀者发表日程可能会根据内部情况变更。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Section6