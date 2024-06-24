import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/Context';
import TypingEffect from '../TypingEffect/TypingEffect';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  return (
    <div className='main'>
      <div className='nav'>
        <p> Gemini</p>
        <img src={assets.user_icon}></img>
      </div>

        {!showResult?
            <div className='hero'>
            <h1>Hello Dev,</h1>
            <h1>How Can I help you today ?</h1>
            <div className='card-section'>
                <div className='card'>
                <p>Suggest something beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon}></img>
                </div>
                <div className='card'>
                <p>Suggest something beautiful places to see on an upcoming road trip</p>
                <img src={assets.bulb_icon}></img>
                </div>
                <div className='card'>
                <p>Suggest something beautiful places to see on an upcoming road trip</p>
                <img src={assets.message_icon}></img>
                </div>
                <div className='card'>
                <p>Suggest something beautiful places to see on an upcoming road trip</p>
                <img src={assets.code_icon}></img>
                </div>
            </div>

            </div>
        
        :<div className='result'>
            <div className='title'> 
                <img src={assets.user_icon}></img>
                <p>{recentPrompt}</p>
            </div>
            <div className='data'>
                <img src={assets.gemini_icon}></img>
                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                : 
                <TypingEffect text={resultData} speed={5} />
                
                }
               
            </div>

        </div>}

        <div className='main-button'>
            <div className='message-box'>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='ask something'
                />
                <div className='icons'>
                    <img src={assets.gallery_icon}></img>
                    <img src={assets.mic_icon}></img>
                    <img src={assets.send_icon} onClick={()=>onSent()}></img>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;
