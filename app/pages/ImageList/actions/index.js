export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'



export const requestPosts = (params) => ({
    type : REQUEST_POSTS,
    params
})

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
        return dispatch(fetchPosts(reddit))
}

const fetchPosts = (params) => dispatch => {
    return fetch(`http://gwapi.shhxzq.com/api/edu/list/banner?type=${params}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
}

export const receivePosts = (reddit) => {
    return (
    {
        type: RECEIVE_POSTS,
        reddit,
        receivedAt: Date.now()
    }
    )
}