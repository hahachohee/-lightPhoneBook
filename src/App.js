  import React, { useState } from 'react'
  import styled from 'styled-components'
  import PhoneDirectoryList from './Components/Common/PhoneDirectoryList';

  const Styled = {
    Body: styled.div`
      display: flex;
      width: 100%;
      flex-direction: column;
    `,
    Container: styled.div`
      display: flex;
      width: 100%;
      min-height: 1000px;
      margin: auto;
      flex-direction: column;
      background-color: black;
      align-items: center;
    `,
    Wrapper: styled.div`
      display: flex;
      width: 100%;
    `,
    Add: styled.div`
      display: flex;
      margin-top: 10px;
      width: 100%;
      align-items: center;
      justify-content: center;
    `,
  };
function App() {

  const [phoneDirectoryInfos, setPhoneDirectoryInfos] = useState([
    {
      id : 0,
      name : '',
      phoneNumber : ''
    },
    {
      id : 1,
      name : '',
      phoneNumber : ''
    },

  ])

  // const handleChange = (e) => {
  //   console.log(e.target.name, e.target.value,)
  //   setphoneDirectoryInfos({
  //     ...phoneDirectoryInfos,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const handleChange = (e, id) => {
    console.log(e, id)
    setPhoneDirectoryInfos((prevState) => {
      return prevState.map((res) => {
        if(res.id === id){
          return{
            ...res,
            [e.target.name]: e.target.value
          }
        }
        return res
      })
    })
  }


  
  return (
    <Styled.Body>
      <Styled.Container>
      <Styled.Add>
        {/* <UserSearch onChange={handleSearch}/> */}
      </Styled.Add>
      <Styled.Add>
        {/* <AddUser onClick={handleCreate} /> */}
      </Styled.Add>
        <Styled.Wrapper>
          {/* <PhoneBookList
            infos={phoneBookInfos}
            onChange={handleOnChangePhoneBookInfo}
            onClickEditButton={handleOnClickPhoneBookInfoEditButton}
            remove={handleRemove}
          /> */}
          <PhoneDirectoryList
            info={phoneDirectoryInfos} 
            onChange={handleChange}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}

export default App;
