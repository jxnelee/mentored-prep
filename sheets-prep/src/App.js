import logo from './logo.svg';
import './App.css';
import Row from './Row'
import React from 'react';
// axios is used to perform api requests
import axios from 'axios'

function App() {
  const SPREADSHEET_ID = '1-su_MkcJ-8mc3GeKL5DTZmlU0alFXaWUsJt7ZpSFbOE'
  const RANGE = 'A2:B9'
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL
  const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\n/g, '\n')
  const [bobaData, setBobaData] = React.useState(null);
  async function fetData() {
      const bobaResponse = await axios.get('https://sheets.googleapis.com/v4/' + {SPREADSHEET_ID} + 'values/Sheet1!' + {RANGE},
      {
        headers: {
          authorization: `Bearer ${PRIVATE_KEY}`
        },
      });
      setBobaData(bobaResponse)
  }
  React.useEffect(() => {
    fetData();
  }, []);
  if(!bobaData) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            berkeley boba shops
          </h1>
          <p>loading...</p>
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          berkeley boba shops
        </h1>
        {bobaData["values"].map((pair) => (
          <Row
            name={pair[0]}
            rating={pair[1]}
          >
          </Row>
        ))}
      </header>
    </div>
  );
}

export default App;
