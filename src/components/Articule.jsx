import { Card} from 'antd';    
import "./articule.css"
const { Meta } = Card;
    const Articule = ({articule}) => {
    return <>   
    <Card hoverable className='articule'
    style={{ width: 300 }}
    cover={<img alt="example" src={articule.thumbnail}/>}
    >
      <Meta title={articule.title} />
    </Card>
    </>
} 

export default Articule