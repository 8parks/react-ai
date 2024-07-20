import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const [name, setName] = useState("박시원");
  const handleName = () => {
    setName("REACT");
  }
  return (
    <>
     <PinkContainer>
       <SmallBox>
         <MessageBox>{count}</MessageBox>
         <MessageBox>{count}</MessageBox>
       </SmallBox>
       <SmallBox>
         <MessageBox>안녕하세요, {name}입니다</MessageBox>
         <MessageBox>안녕하세요, {name}입니다</MessageBox>
         <MessageBox>안녕하세요, {name}입니다</MessageBox>
       </SmallBox>
     </PinkContainer>
     <Button onClick={handleCount}>Click1</Button>
     <Button onClick={handleName}>Click2</Button>
   </>
  )
}

export default App;

const PinkContainer = styled.div `
  background-color: pink;
  width: 500px;
  height: 300px;
  border: solid 2px black;
  border-radius: 5px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const SmallBox = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MessageBox = styled.div`
 color:blue;
`

const Button = styled.Button`
 background-color: red;
 font-size: 30px;
 padding: 10px;
 border-radius: 20px;
`