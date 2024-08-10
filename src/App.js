import {Container, Content, Row} from './styles';
import Input from './components/input'; 
import Button from './components/Button';
import { useState } from 'react';


const App = () =>{
 const [currentNumber, setCurrentNumber] = useState('0'); 
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('');


 const hardleOnClear = () => {
  setCurrentNumber('0') 
  setFirstNumber('0')
  setOperation('')
  
 }
 const handleAddNumber = (num) => {
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
 }

 const handlSumNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber (String(currentNumber));
    setCurrentNumber('0')
    setOperation('+')
    
  }
  else{
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')
  }
 }

 const  handlMenosNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber (String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  }
  else{
    const menos = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(menos))
    setOperation('')
  }
 }

const handlMultNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber (String(currentNumber));
    setCurrentNumber('0')
    setOperation('*')
  }
  else{
    const mult = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(mult))
    setOperation('')
  }
 }

 const handlQuadradoNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber (String(currentNumber));
    setOperation('²')
     
   
  }
  else{
    const quadrado = Math.pow(firstNumber, 2) ;
    setCurrentNumber(String(quadrado))
    setOperation('')
  }
 }

 const handlDivNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber (String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  }
  else{
    const div = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(div))
    setOperation('')
  }
 }
   
 const handlEquals = () => {
  if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
   
   switch(operation){
       case '+':
        handlSumNumber();
        break;
        case '-':
          handlMenosNumber(); 
          break;
          case '*':
            handlMultNumber(); 
            break;
            case '/':
              handlDivNumber(); 
              break;
              
        default:
        break;

   }
    
  }
 
  }
 


  return (
    <Container>
      <Content>
      <Input value = {currentNumber}/>
        <Row>
        <Button label="." onClick={() => handleAddNumber('.')}/>
        <Button label="c" onClick={hardleOnClear}/>
        <Button label="/" onClick={handlDivNumber}/>
        <Button label="*" onClick={handlMultNumber}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={ handlMenosNumber}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handlSumNumber}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handlEquals}/>
        </Row>
        <Row>
        <Button label="_ _" onClick={() => handleAddNumber('0')}/>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="X²" onClick={handlQuadradoNumber}/>
        <Button label=" _ _ " onClick={() => handleAddNumber('0')}/>
        </Row>
 
        
        
        
       </Content>
      </Container>
  );
}

export default App;
