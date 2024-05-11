// Пример 1- чтобы когда лайкаем сердце сталo красное
import React from 'react'

const Like = () => {
    const [like, setlike] = React.useState(false);

  return (
    // <div>
    //     <h2 onClick={() => setlike(!like)}>
    //         Like: {like ? '❤' : '🤍'}
    //     </h2>
    // </div>
    <div>
        <h2 onClick={() => setlike((prevLike) => {
            return !prevLike
        })}>
            Like: {like ? '❤' : '🤍'}
        </h2>
    </div>
  )
}

export default Like