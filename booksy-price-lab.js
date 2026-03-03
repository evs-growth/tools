class BooksyPriceLab extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
      <style>
        :host {
          all: initial;
          display: block;
          font-family: sans-serif;
        }
        #root {
          min-height: 300px;
          padding: 40px;
          background: #f8fafc;
        }
      </style>
      <div id="root"></div>
    `;

    this.mountApp();
  }

  mountApp() {
    const mountNode = this.shadowRoot.getElementById("root");

    const App = () => {
      const [count, setCount] = React.useState(0);

      return React.createElement(
        "div",
        { className: "wrapper" },
        React.createElement(
          "h1",
          { style: { fontSize: "28px", fontWeight: "800", marginBottom: "20px" } },
          "Booksy Nail Price Lab"
        ),
        React.createElement(
          "button",
          {
            onClick: () => setCount(count + 1),
            style: {
              padding: "12px 20px",
              background: "#0BA3AD",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "700",
              cursor: "pointer"
            }
          },
          "Clicks: " + count
        )
      );
    };

    const root = ReactDOM.createRoot(mountNode);
    root.render(React.createElement(App));
  }
}

customElements.define("booksy-price-lab", BooksyPriceLab);
