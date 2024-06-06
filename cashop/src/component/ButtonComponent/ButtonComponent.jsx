import React from "react";
import { Button } from "antd";
// import {SearchOutlined} from '@ant-design/icons'
const ButtonComponent = ({size,bordered,styleButton,styleTextButton,textButton, ...rests }) =>{
    return(
        <Button size={size} 
                bordered={bordered} 
                style={styleButton}  
                {...rests}
                // icon={<SearchOutlined color={colorButton} style={{color: '#ffff'}}/>}
                >
                <span style={styleTextButton}>{textButton}</span>
            </Button>
    )
}

export default ButtonComponent