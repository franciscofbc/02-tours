import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        // setTimeout(() => {
        setTours(data);
        setIsLoading(false);
        // }, 3000);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Tours props={tours} />;
};
export default App;
