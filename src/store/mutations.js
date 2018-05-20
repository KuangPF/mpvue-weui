import * as type from './mutation-types';
const mutations = {
  [type.USERINFO](state, userinfo) { // eslint-disable-line
    state.userinfo = userinfo;
  }
}

export default mutations;
