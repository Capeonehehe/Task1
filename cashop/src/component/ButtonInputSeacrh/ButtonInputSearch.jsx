import React from "react";
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const {size,placeholder, 
        bordered, 
        backgroundColorInput = '#ffff',
        backgroundColorButton= '#e02027',
        colorButton= '#ffff'
    } = props
    return(
        <div style={{display: 'flex'}}>
            <InputComponent size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{backgroundColor: backgroundColorInput }}/>
            
            <ButtonComponent 
                size={size} 
                icon={<SearchOutlined color={colorButton} style={{color: '#ffff'}}/>}
                styleButton={{backgroundColor: backgroundColorButton, color: colorButton}}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch