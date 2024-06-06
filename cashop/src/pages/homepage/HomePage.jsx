import React from "react";
import TypeProduct from "../../component/TypeService/TypeService";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../component/SliderCoponent/SliderComponent";
import slider1 from '../../asset/image/slider1.webp'
import slider2 from '../../asset/image/slider2.webp'
import slider3 from '../../asset/image/slider3.webp'

const HomePage = () => {
    const arr =['Lắp đặt','Trả góp','Bảng giá','Xây dựng cấu hình','Chính sách bảo hành','Thiết bị mining']
    return(
        <div style={{padding: 'o 120px '}}>
            <WrapperTypeProduct>
                {arr.map((items) => { 
                    return(
                        <TypeProduct name ={items} key={items}/>
                    )
                })}
            </WrapperTypeProduct>
            <SliderComponent arrImage={[slider1,slider2,slider3]} />
           
        </div>
        
    )
}

export default HomePage;