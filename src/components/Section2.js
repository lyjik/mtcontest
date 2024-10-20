import section2_Img1 from '../assets/section2_Img1.png'
import section2_Img2 from '../assets/section2_Img2.png'
import section2_Img3 from '../assets/section2_Img3.png'
import section2_Img4 from '../assets/section2_Img4.png'
import ImgCard from './ImgCard'

const section2ImgCards = [
    {
        img: section2_Img1,
        text: "HD Hyundai & Your Branch"
    },
    {
        img: section2_Img2,
        text: "Your Team and Colleagues"
    },
    {
        img: section2_Img3,
        text: "The Branch’s Signature Model"
    },
    {
        img: section2_Img4,
        text: "Production Line"
    },
]

const Section2 = () => {
    return (
        <section className='section2'>
            <div className='sectionWarp'>
                <div className='mainTitleBox'>
                    <h2>Any Topic is Great!</h2>
                    <p>Feel free to introduce as much as you can share!</p>
                </div>
                <div className='imgCardBox'>
                    {section2ImgCards.map((card, id) => <ImgCard key={id} img={card.img} text={card.text}/>)}
                </div>
            </div>
        </section>
    )
}
  
export default Section2