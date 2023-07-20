import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EQW-KpTD_3ovuR9Ylm_oy8vhiGDofefRtw&usqp=CAU" alt="" />
        </div>
        <div className="text">
        <h2>Arsenal may have denied Man Utd a second top midfielder after signing Declan Rice</h2>
        <p className="info">
          <a href="author">Micheal Omoha</a>
          <time>2023-07-18 15:53</time>
        </p>
        <p className="summary">Manchester United lost out to Arsenal on Declan Rice, but now the aftershocks are being felt. Arsenal pulled off a major coup when breaking the British transfer record fee to pluck Declan Rice from West Ham to the tune of £105m, while also thwarting bitter rivals Manchester United. The Red Devils had tracked Rice for some time, with many at the club seeing him as the second coming of Roy Keane.</p>
        </div>
      </div>
  )
}

export default Post