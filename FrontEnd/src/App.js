import ReactDOM from 'react-dom';
import LogIn from './LogIn';
const App = () => {
  return (
    <div>
      <h1>Elytra</h1>
      <div id="credentials">
        <LogIn />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
