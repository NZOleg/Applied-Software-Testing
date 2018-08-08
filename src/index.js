import React from 'react';
import ReactDOM from 'react-dom';
import TestModule from './TestModule';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TestModule visits={10} customerType={"normal"} prediscountPrice={60} />, document.getElementById('root'));
registerServiceWorker();
