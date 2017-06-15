module.exports = {
    path: 'image',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../ImageList/containers/ListCon'))
        })
    }
}

