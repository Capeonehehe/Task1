import {Row} from 'antd';
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    font-family: 'Arial', sans-serif !important;
    background: #f4f8fa;
    color: #333333;
`
export const WrapperTextHeader = styled.span`
    font-size: 10px;
    color: #3333;
    font-weight: bold;
    text-align: left;
    flex: 0 0 220px;
    max-width: 220px;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
    font-size: 12px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 14px;
    color: #333333
`

export const WrapperCart = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size 12px
`