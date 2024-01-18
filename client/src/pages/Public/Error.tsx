import { useParams } from 'react-router-dom';

const Error = () => {

  const { errorName } = useParams();

  return (
    <div>
      <h2>Error Page</h2>
      <p>Error Name: {errorName}</p>
    </div>
  )
}

export default Error;