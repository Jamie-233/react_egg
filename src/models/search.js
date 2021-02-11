import { getLists } from '@/services/search';

export default {
    namespace: 'search',
    state: {
        text: 'dva',
        lists: []
    },
    // 同步
    reducers: {
        getLists(state, action) {
        console.log('---');
        return {
                ...state,
                lists: Array(10).fill(action.payload)
            }
        }
    },
    // 异步
    effects: {
        // generator
        *getListsAsync({payload}, {call, put}) {
            const res = yield call(getLists, payload)
            yield put({
                type: 'getLists',
                payload: res.lists
            })
        }
    }
}