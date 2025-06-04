import React from 'react'
import usetPostStore from '../stores/postStore'

function PostPage() {

  const actionFetchPostsByUserId = usetPostStore( state => state.actionFetchPostsByUserId )
  const posts = usetPostStore( state => state.posts ) // ชื่อต้องตรงกันใน postStore
  return (
    <div>PostPage</div>
  )
}

export default PostPage