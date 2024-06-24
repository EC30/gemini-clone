import { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const handleExtendSidebar = () => {
       setExtended(prevExtended => !prevExtended);
    };

    const {
        onSent,
        prevPrompt,
        setRecentPrompt,
        setResultData,
        recentPrompt,
        newChat
    } = useContext(Context);

    const handleItemClick = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src={assets.menu_icon} alt="Menu Icon" className='menu-icon' onClick={handleExtendSidebar} />
                <div className='sidebar-top-chat'>
                    <img src={assets.plus_icon} alt="Plus Icon" onClick={newChat} />
                    {extended ? <p> New Chat</p> : null}
                </div>
                {extended ? <p> Recent</p> : null}
                {extended ?
                    prevPrompt.map((item, index) => (
                        <div key={index} className='sidebar-top-recent' onClick={()=>handleItemClick(item)}>
                            <img src={assets.message_icon} alt="Message Icon" />
                            <p>{item.length > 15 ? item.substring(0, 15) + '...' : item}</p>
                        </div>
                    ))
                : null}
            </div>
            <div className='sidebar-button'>
                <div className='sidebar-button-help'>
                    <img src={assets.question_icon} alt="Question Icon" />
                    {extended ? <p> Help</p> : null}
                </div>
                <div className='sidebar-button-help'>
                    <img src={assets.history_icon} alt="History Icon" />
                    {extended ? <p> Activity</p> : null}
                </div>
                <div className='sidebar-button-help'>
                    <img src={assets.setting_icon} alt="Setting Icon" />
                    {extended ? <p> Setting</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
