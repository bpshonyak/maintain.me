import { PROFILE_DATA } from './../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, profile: action.payload };
  }

  return state;
}
