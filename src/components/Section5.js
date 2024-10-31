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
                <div className="content1">
                    <div className="bgc2">Speaking Video</div>
                    <div>
                        <div className="bgc1" onClick={handleToggleModal}>Check Korean, Native Language Script ➔</div>

                        {isModalOpen && (
                            <div className="modal">
                                <div className="modalContent">
                                    <div className="textBox">
                                        <p>
                                            <span>저는 HDX 북미법인 글로벌스탭 찰스입니다.</span><br></br>
                                            (Hello! I'm Charles, the global staff of HDX North America)<br></br><br></br>

                                            <span>우리 법인은 2010년에 만들어졌어요.</span> <br></br>
                                            (Our branch was created in 2010)<br></br><br></br>

                                            <span>그리고 우리 법인은 미국 로스앤젤레스에 위치해 있어요.</span> <br></br>
                                            (And our branch is located in Los Angeles, USA.)<br></br><br></br>

                                            L.A. is a city full of culture and art.<br></br>
                                            With its stunning beaches and spectacular Hollywood, it's full of life.<br></br><br></br>

                                            <span>이 곳에서 5명의 주재원과 40명의 글로벌스탭이 함께 근무해요.</span><br></br>
                                            (Five expatriates and 40 global staff work together here.)<br></br><br></br>

                                            Everyone is kind and fun to work with.<br></br><br></br>

                                            <span>우리 법인은 건설기계를 판매해요.</span> (we sells construction machinery.)<br></br><br></br>

                                            Our excavator is the number one in this city. Isn't it cool?<br></br><br></br>

                                            <span>우리 법인장님은 김현대 상무님이에요.</span> (our president is Hyundai kim)<br></br><br></br>

                                            He is a master of excavators. 법인장님 know everything about excavators.<br></br>
                                            He also introduced me to Korean food, so I tried it and it was really delicious. <br></br>
                                            My favorite menu is 불고기!<br></br><br></br>

                                            We have 10 people on our team, and we promote excavators.<br></br>
                                            This is our best colleague, Michael. <br></br><br></br>

                                            <span>우리는 산책을 좋아해요.</span> (We like to take a walk)<br></br>
                                            We have lunch together and enjoy a short walk around the neighborhood.<br></br><br></br>

                                            <span>우리는 해변에서 피크닉을 하고 싶어요.</span><br></br>
                                            (We want to have a picnic on the beach.)<br></br><br></br>

                                            Recently, we discussed with our team the idea of having a picnic on the beach.<br></br>
                                            We want to enjoy delicious food while looking at the sea and listening to each other's stories.<br></br><br></br>

                                            How was the introduction of our HDX American branch ?<br></br>
                                            Please keep supporting us.<br></br><br></br>

                                            <span>감사합니다! 사랑해요 HD현대</span><br></br>
                                            (thank you I love HDhyundai)
                                        </p>
                                    </div>
                                    <div className="close bgc3" onClick={handleToggleModal}>Close</div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="content2">
                    <div className="bgc2">Sketch Video</div>
                    <div>
                        <div className="videoBox"></div>
                    </div>
                </div>
                {/* <p>Click the button for the Korean guide needed<br /> for filming your branch introduction video!</p> */}


            </div>


        </section>
    )
}

export default Section5