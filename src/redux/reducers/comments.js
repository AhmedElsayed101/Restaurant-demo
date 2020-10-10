import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    errMess: null,
    comments:[]
}

export const Comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};