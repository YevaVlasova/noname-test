import "../styles/Layout.scss";

const Layout = ({ children, height }: any) => {
  return (
    <div className="Layout">
      <div className="Layout_body">
        <div className="Layout_line">
          <div className="line" style={{ height: height }}></div>
          <svg width="11" height="11" fill="none">
            <path
              d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
              fill="#ada8c4"
            />
          </svg>
        </div>
        {children}
        <div className="Layout_line">
          <div className="line" style={{ height: height }}></div>
          <svg width="11" height="11" fill="none">
            <path
              d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
              fill="#ada8c4"
            />
          </svg>
        </div>
      </div>

      <div className="Layout_underline"></div>
    </div>
  );
};

export default Layout;
