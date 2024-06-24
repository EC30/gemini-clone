import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const onSent = async (prompt) => {
    if (input.trim() === '') {
        return;  
    }
    setResultData('');
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response = await run(prompt);
      setRecentPrompt(prompt)
      setResultData(response);
    }else{
      setPrevPrompt(prev => [...prev, input]);
      setRecentPrompt(input)
      response = await run(input);
      setResultData(response);
    }
    // console.log('erika');
    // console.log(response)
    // setResultData(response);
    setLoading(false);
    setInput(''); 
  }
  const newChat =()=>{
    setShowResult(false);
  }
  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;
