import React, { useEffect } from 'react'
import usetPostStore from '../stores/postStore'
import useAuthStore from '../stores/authStore'

function PostPage() {

  const userId = useAuthStore( state => state.userId)
  const actionFetchPostsByUserId = usetPostStore( state => state.actionFetchPostsByUserId )
  const posts = usetPostStore( state => state.posts ) // ชื่อต้องตรงกันใน postStore

  useEffect( () => {
    actionFetchPostsByUserId(userId);
  }, []);

  return (

    <div>PostPage</div>

  )
}

export default PostPage