import React from 'react'
import styled from 'styled-components'

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
        border : 1px solid #ffffff;
        padding : 24px;
        flex-direction : column;
        color: white;
    `,
    Row: styled.div`
        display : flex;
        align-items: center;
        justify-content: space-evenly;
        width : 100%;
        margin-bottom : ${props => props.bottom}px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}


const PhoneBookInfo = (props) => {

    const { onChange, info  } = props

    const handleChangeInput = (e) => {
        onChange(e, info.id)
    }
    
    
        return (
                <Styled.Body>
                    <input 
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={handleChangeInput} 
                    />
                    <input 
                        type="number"
                        name="phoneNumber"
                        value={info.phoneNumber}
                        onChange={handleChangeInput} 
                    />
                </Styled.Body>
        )
    }
export default PhoneBookInfo;