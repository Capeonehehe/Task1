import React from "react";
import { Col} from 'antd';
import { UserOutlined,CaretDownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperCart,
    WrapperTextHeaderSmall} from "./style";
import ButtonInputSearch from "../ButtonInputSeacrh/ButtonInputSearch";

export const HeaderCoponent = () =>{
    return(
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>
                            <span>TIN HOC NGOI SAO</span>
                    </WrapperTextHeader>
                </Col>
                <Col span={12}> 
                        <ButtonInputSearch size='large' textButton='Tìm kiếm' placeholder="Bạn tìm gì.." //onSearch={onSearch}
                        />

                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: '20px'}}/>
                        <div>
                            <WrapperTextHeaderSmall> Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                        
                    </WrapperHeaderAccount>
                    <WrapperCart>
                        <div>
                            <ShoppingCartOutlined style={{fontSize: '20px'}}/>
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>

                    </WrapperCart>
                </Col>
            </WrapperHeader>
        </div>
    )
}