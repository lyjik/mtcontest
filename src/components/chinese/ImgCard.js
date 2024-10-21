
const imgCard = ({img, text}) => {
    return (
        <div className='imgCard'>
            <div className="imgBox">
                <img src={img} alt={text}/>
            </div>
            <div className="textBox">
                {text}
            </div>
        </div>
    )
}
  
export default imgCard