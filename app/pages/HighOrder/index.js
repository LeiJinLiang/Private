//module.exports = {
//    path: 'app',
//    getComponent(nextState, cb) {
//        require.ensure([], (require) => {
//            cb(null, require('../Async/containers/App'))
//        })
//    }
//}


module.exports = {
    path : 'high',
    getComponent(nextState, cb) {
        require.ensure([],(require)=> {
            cb(null,require('../HighOrder/components/HighOrderComponent'))
        })
    }
}

