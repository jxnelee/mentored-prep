import React from 'react';
import axios from 'axios';
import Card from './Card'
import './App.css';

function App() {
  const [bobaData, setBobaData] = React.useState(null);
  async function fetData() {
    const res = await axios.get(
        'https://api.airtable.com/v0/app1uw2rKGuDATcPi/boba-shops',
        {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        }
    );
    console.log(res.data);
    setBobaData(res.data.records);
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

  console.log("boba data:")
  console.log(bobaData)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          berkeley boba shops
        </h1>
        {bobaData.map((record) => (
          <Card
            name={record.fields.Name}
            rating={record.fields.Rating}
          >
          </Card>
        ))}
      </header>
    </div>
  );
}

export default App;
