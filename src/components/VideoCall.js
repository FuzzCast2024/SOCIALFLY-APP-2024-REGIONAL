import AgoraUIKit from 'agora-rn-uikit';

      const App = () => {
        const connectionData = {
          appId: '1b692a4d88224e549ae8f688fcb8ada3',
          channel: 'test',
          token: null, 
         };
        return(
          <AgoraUIKit connectionData={connectionData} />
         )
      }

      export default App; 
