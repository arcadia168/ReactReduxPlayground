import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ColorTool } from './components/color-tool';

class MyApp extends React.Component<{}, {}> {

    public render() {
        return <ColorTool/>;
    }
}

ReactDOM.render(<ColorTool />, document.querySelector('main'));
