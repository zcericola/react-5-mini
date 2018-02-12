import { createStore } from 'redux';
import counter from './ducks/counter';
//counter is our reducer
let store = createStore(counter);

export default store;


