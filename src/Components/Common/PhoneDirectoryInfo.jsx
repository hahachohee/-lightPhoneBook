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
        margin-top : 15px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}


const PhoneBookInfo = (props) => {

    const { onChange, info, onClickEditButton , remove } = props

    const handleChangeInput = (e) => {
        onChange(e, info.id)
    }

    const handleClickRemoveButton = () => {
        remove(info.id)
    }

    return (
        <Styled.Body>
                {info.isEditing ? (
                    <>
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
                    </>
                ) : (
                        <>
                            <b> 이름 : {info.name}</b>
                            <b> 전화번호 : {info.phoneNumber}</b>
                            <b> 날짜 : {info.isDate}</b>
                        </>
                    )}
            <Styled.Row>
                <button
                    onClick={e => {
                        e.preventDefault()
                        onClickEditButton(info.id)
                    }}
                >
                    {info.isEditing ? '저장' : '수정'}
                </button>
                <button
                    onClick={handleClickRemoveButton}
                >
                    삭제
                </button>
            </Styled.Row>
        </Styled.Body>
    )
}
export default PhoneBookInfo;