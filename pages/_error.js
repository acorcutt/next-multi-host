function Error({ statusCode, message }) {
  return (
    <div>
      <h1>Custom Error</h1>
      <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
      <p>{message || 'Unknown Error'}</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err ? err.message : 'Unknown Server Error';
  return { statusCode, message };
};

export default Error;
