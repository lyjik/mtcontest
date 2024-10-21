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
                    <h2>Sample<br /> submission video</h2>
                </div>
                <div className="content">
                    <div>
                        <div className="bgc2">Speaking Video</div>
                        <div className="videoBox"></div>
                    </div>
                    <div>
                        <div className="bgc2">Sketch Video</div>
                        <div className="videoBox"></div>
                    </div>
                </div>
                <p>Click the button for the Korean guide needed<br /> for filming your branch introduction video!</p>
                <div className="bgc1" onClick={handleToggleModal}>Check Korea Guide ➔</div>

                {isModalOpen && (
                    <div className="modal">
                        <div className="modalContent">
                            <div className="textBox">
                                <p>1) 00법인은 0000년도에 설립되었어요/만들어졌어요.</p>
                                <p>2) 00법인은 00(Country) 00(City)에 위치해 있어요. 이 곳에는 00명의 주재원과 00명의 글로벌스탭이 함께 근무를 해요.</p>
                                <p>3) 우리 00법인은 00 제품을 만들고/판매하고 있어요.</p>
                                <p>4) 우리 00법인은 00을 좋아해요.</p>
                                <p>5) 우리 00법인은 00를 하고 싶어요.</p>
                            </div>
                            <div className="close bgc3" onClick={handleToggleModal}>Close</div>
                        </div>
                    </div>
                )}
            </div>


        </section>
    )
}

export default Section5