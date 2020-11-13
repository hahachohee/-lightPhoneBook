  import React, { useState } from 'react'
  import styled from 'styled-components'
  
  import PhoneDirectoryList from './Components/Common/PhoneDirectoryList';
  import AddUser from './Components/Common/AddUser'
  import SearchUser from './Components/Common/SearchUser'
import moment from 'moment';

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

  const [phoneDirectorySearch, setPhoneDirectorySearch] = useState('')
    

  const [phoneDirectoryInfos, setPhoneDirectoryInfos] = useState([
    {
      id : 0,
      name : '',
      phoneNumber : '',
      isEditing : false,
      isDate : moment().format('YYYY-MM-DD HH:mm:ss')
    },
    {
      id : 1,
      name : '',
      phoneNumber : '',
      isEditing : false,
      isDate : moment().format('YYYY-MM-DD HH:mm:ss')
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

  const handleClickEditButton = (id) =>{
    setPhoneDirectoryInfos((prevState) => {
      return prevState.map((res) =>{
        if( res.id === id){
          return{
            ...res,
            isEditing : !res.isEditing
          }
        }
        return res
      })
    })
  }


  const handleClickRemoveButton = (id) => {
    setPhoneDirectoryInfos((prevState) =>{
      return prevState.filter(res => res.id !== id)
    })
  }

  const handleCreate = () => {
    setPhoneDirectoryInfos((prevState) => {
      return prevState.concat(
        {
          id : prevState.length + 1,
          name : '',
          phoneNumber : '',
          isEditing : false,
          isDate : moment().format('YYYY-MM-DD HH:mm:ss')
        }
      )
    })
  }


  const handleSearch = (e) => {
    
    setPhoneDirectorySearch(
        e.target.value
      )
     
      }
  
  return (
    <Styled.Body>
      <Styled.Container>
      <Styled.Add>
        <SearchUser 
          info={phoneDirectorySearch}
          onChange={handleSearch}
        />
      </Styled.Add>
      <Styled.Add>
        <AddUser onClick={handleCreate}/>
      </Styled.Add>
        <Styled.Wrapper>
          <PhoneDirectoryList
            infos={phoneDirectoryInfos.filter((res) =>{
              return res.name.indexOf(phoneDirectorySearch) > -1
            })} 
            onClickEditButton={handleClickEditButton}
            onChange={handleChange}
            remove={handleClickRemoveButton}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}

export default App;
