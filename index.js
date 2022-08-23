//React 17
ReactDOM.render(
  <p>My first page powered by react</p>,
  document.getElementById("root")
);
ReactDOM.render(
  <ul>
    <li>Hi</li>
    <li>Are you there</li>
  </ul>,
  document.getElementById("root")
);

// React 18
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<h1>Hello, everyone!</h1>);

root.render(<h1>I'm am Augusto and I'm here!</h1>);

root.render(
  <ul>
    <li>Hi</li>
    <li>Are you there</li>
  </ul>
);
