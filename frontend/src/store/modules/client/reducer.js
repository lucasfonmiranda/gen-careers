import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function client(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.client;
      });
    default:
      return state;
  }
}
