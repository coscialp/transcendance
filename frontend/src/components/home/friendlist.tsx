import axios from "axios"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ip } from "../../App";
import './home.css'
import { Open_Message } from "./privateMessage";

export function Friendlist({currentChat, setCurrentChat}: any) {
  const [cookies] = useCookies();
  const [friends, setFriends] = useState([]);

  function FriendRequest() {
    axios.request({
      url: '/user/me/friends',
      method: 'get',
      baseURL: `http://${ip}:5000`,
      headers: {
        "Authorization": `Bearer ${cookies.access_token}`,
      }
    }).then((response: any) => {
      console.log(response)
        setFriends(response.data.friends);
    })
  }


  useEffect(() => {
    let mounted = true;

    if (mounted) { FriendRequest() }
    
    const interval = setInterval(() => {
      let mounted = true;

      if (mounted) { FriendRequest() }

      return () => { mounted = false }
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [cookies])

  function handleDeleteFriends(friendToDelete: any) {
    console.log("here")
    axios.request({
      url: '/user/friends/remove',
      method: 'delete',
      baseURL: `http://${ip}:5000`,
      headers: {
        "Authorization": `Bearer ${cookies.access_token}`,
      },
      data: {
        'idToDelete': friendToDelete.username
      }
    }).then(response => FriendRequest())
  }

  function handleBlacklist(friendToDelete: any) {
    console.log(friendToDelete)
    axios.request({
      url: '/user/blacklist/add',
      method: 'patch',
      baseURL: `http://${ip}:5000`,
      headers: {
        "Authorization": `Bearer ${cookies.access_token}`,
      },
      data: {
        'newBlackListId': friendToDelete.username
      }
    }).then(response => FriendRequest())
  }

  console.log(friends)

  return (
    <div className="FriendElement" >
      <p className="FriendTitle" >Friend List</p>
      <div className="allFriendList">{friends.map((friend: any) => (
        <details key={friend.id} id={friend.id} >
          <summary className="FriendList">{friend.username}</summary>
          <nav className="menuFriendList">
            <button className="friendBtn" onClick={e => {document.getElementById(friend.id)?.removeAttribute("open") ; Open_Message(); setCurrentChat(friend.username)}} ><span /><span /><span /><span />Send message</button>
            <button className="friendBtn"  ><span /><span /><span /><span />Invite game</button>
            <button className="friendBtnOut friendBorder" onClick={() => {handleDeleteFriends(friend)}}><span /><span /><span /><span />Delete friend</button>
            <button className="friendBtnOut"  onClick={() => {handleDeleteFriends(friend); handleBlacklist(friend)}}><span /><span /><span /><span />Blacklist</button>
          </nav>
        </details>
      ))}
      </div>
    </div>
  )
}
