import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { useChatStore } from "../../../lib/chatStore";
import { auth } from "../../../lib/firebase";

const UserInfo = () => {

    const { currentUser } = useUserStore();
    const { resetChat } = useChatStore();

    const handleLogout = () => {
        auth.signOut();
        resetChat()
    };

    return (
        <div className='userInfo'>
            <div className="user">
                <img src={currentUser.avatar || "./avatar.png"} alt="" />
                <h2>{currentUser.username || 'currrentuser name'}</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
                {currentUser && <button
                    style={{
                        padding: '8px',
                        borderRadius: '10px',
                        backgroundColor: '#c91b2a',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </button>}
            </div>
        </div >
    )
}

export default UserInfo