import { useState } from "react";

const Section5 = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleToggleModal = () => {
        setModalOpen(prevState => !prevState)
    }

    return (
        <section className='section5'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>提交视频样本</h2>
                </div>
                <div className="content1">
                    <div className="bgc2">演讲视频</div>
                    <div className="bgc1" onClick={handleToggleModal}>确认韩语指南 ➔</div>
                    {isModalOpen && (
                        <div className="modal">
                            <div className="modalContent">
                                <div className="textBox">
                                    <p>
                                        <span>1. 00법인은 0000년도에 설립되었어요/만들어졌어요.</span><br></br>
                                        = 00法人在0000年成立。<br></br><br></br>
                                        <span>2. 00법인은 00(나라명) 00(도시)에 위치해 있어요.<br></br>
                                        이 곳에는 00명의 주재원과 00명의 글로벌스탭이 함께 근무를 해요.</span><br></br>
                                        = 00法人位于00（国家名）00（城市）。<br></br>
                                        这里有00名外派员工和00名全球员工一起工作。<br></br><br></br>
                                        <span>3. 우리 00법인은 00 제품을 만들고/판매하고 있어요.</span><br></br>
                                        = 我们00法人生产/销售00产品。<br></br><br></br>
                                        <span>4. 우리는 00을 좋아해요</span><br></br>
                                        = 我们喜欢00。/ 我们的00喜欢做00。<br></br><br></br>
                                        <span>5. 우리는 00를 하고 싶어요.</span><br></br>
                                        = 我们想要做00。/ 我们的00想要00。
                                    </p>
                                </div>
                                <div className="close bgc3" onClick={handleToggleModal}>关闭</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="content2">
                    <div className="bgc2">描述视频</div>
                    <div>

                        <div className="videoBox"></div>
                        <div className="videoBox"></div>
                    </div>
                </div>
                {/* <p>查看拍摄海外法人介绍视频所需的韩语指南</p> */}
            </div>
        </section>
    )
}
  
export default Section5