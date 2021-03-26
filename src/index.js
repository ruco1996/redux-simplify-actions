import createAction from './createAction'
import createAsyncAction from './createAsyncAction'
import createReducer from './createReducer'

// Example file: actions.js

// const getAllUsers = createAsyncAction('GET USERS')

//          getAllUsers.request(payload?)   // GET USERS | REQUEST
//          getAllUsers.success(payload?)   // GET USERS | SUCCESS
//          getAllUsers.error(payload?)     // GET USERS | ERROR

// const setUser = createAction('SET USER') // SET USER

// setUser(payload?)

// Example file: reducer.js

// const INIT_STATE = {
//   loading: false,
//   data: null
// }

// export default createReducer(INIT_STATE)
//   .on(getAllUsers.request, (state, action) => ({
//     ...state,
//     loading: true
//   }))
//   .on(getAllUsers.success, (state, action) => ({
//     ...state,
//     loading: false,
//     data: action.payload
//   }))
//   .on(getAllUsers.error, (state) => ({
//     ...state,
//     loading: false,
//     data: null
//   }))

// export default createReducer(INIT_STATE)
//   .on(getAllUsers.request, (state, action) => ({
//     ...state,
//     loading: true
//   }))
//   .on([getAllUsers.success, getAllUsers.error], (state, action) => ({
//     ...state,
//     loading: false,
//   }))

// Example file: sagas.js

// export default function* usersSagas() {
//   yield all([
//     takeLatest(getAllUsers.request, onGetAll),
//   ])
// }

export default {
  createAsyncAction,
  createAction,
  createReducer
}
