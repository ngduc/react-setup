import service from './service'

const getPost = (postId) => {
  return service.read(['posts', postId], {}).catch(error => { throw error })
}
const listComments = (postId) => {
  return service.list(['posts', postId, 'comments'], {}).catch(error => { throw error })
}

export default {
  service,
  getPost,
  listComments
}
