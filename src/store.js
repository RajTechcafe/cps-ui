import { applyMiddleware,createStore,compose} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware = applyMiddleware(promise(),thunk,logger());
export default createStore(reducer ,
    compose ( middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );
