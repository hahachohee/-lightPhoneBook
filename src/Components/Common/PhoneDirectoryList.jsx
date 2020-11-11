import React from 'react'
import styled from 'styled-components'

import PhoneDirectoryInfo from './PhoneDirectoryInfo'

const Styled = {
    Body: styled.div`
        display : flex;
        flex-direction : column;
        width : 600px;
        margin : 30px auto;
        align-items: center; 
        justify-content: center;

    `,

    PhoneBookInfoWrapper : styled.div`
        display : flex; 
        width : 100%;
        margin-bottom : 15px;
        :last-child {
            margin-bottom : 0;
        }
    `
}

const PhoneDiretoryList = (props) => {

    const { info, onChange } = props

    const list = info.map((res, i) => {
        return(
            <Styled.PhoneBookInfoWrapper
                key={i}
            >
                <PhoneDirectoryInfo 
                    info={res}
                    onChange={onChange}
                />
            </Styled.PhoneBookInfoWrapper>
        )
    })

    return (
        <Styled.Body>
            {list} 
        </Styled.Body>
    )
}

export default PhoneDiretoryList