import section2_Img1 from '../../assets/section2_Img1.png'
import section2_Img2 from '../../assets/section2_Img2.png'
import section2_Img3 from '../../assets/section2_Img3.png'
import section2_Img4 from '../../assets/section2_Img4.png'
import ImgCard from './ImgCard'

const section2ImgCards = [
    {
        img: section2_Img1,
        text: "HD现代  & 您的海外法人"
    },
    {
        img: section2_Img2,
        text: "您的团队和同事"
    },
    {
        img: section2_Img3,
        text: "法人签名模型"
    },
    {
        img: section2_Img4,
        text: "生产线"
    },
]

const Section2 = () => {
    return (
        <section className='section2'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>
                        任何话题都可以用来<br></br>
                        介绍您的海外法人
                    </h2>
                    <p>请随意尽可能多地介绍您可以分享的内容!</p>
                </div>
                <div className='imgCardBox'>
                    {section2ImgCards.map((card, id) => <ImgCard key={id} img={card.img} text={card.text}/>)}
                </div>
            </div>
        </section>
    )
}
  
export default Section2