import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] = useState([])

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
  .then(res => {
    setData(res.data)
  }).catch(err => console.error(err))
}, [])


const StyledApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
`
const StyledDiv = styled.div`
width: 90%;
`
  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
      { data.length ? data.map(data => {
        return <Character data={data} />
      }) : <p>Page is Loading</p>}
      </StyledDiv>
    </StyledApp>
  );
}

export default App;
