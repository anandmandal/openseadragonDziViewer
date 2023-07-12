import React from 'react';
import DZIViewer from './components/DZIViewer';

const App = () => {

const dziUrl = "../dziImage/image.dzi"
  return (
    <div>
      <h1>OpenSeadragon DZI Viewer</h1>
      <DZIViewer dziUrl={dziUrl} />
    </div>
  );
};

export default App;
