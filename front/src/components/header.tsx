/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as ReactRouterDom from "react-router-dom";

export interface HeaderComponentProps {
    title?: string;
    titleComponent?: JSX.Element;
    link?: string;
    destination?: any;
  }

export function HeaderComponent({
  title, titleComponent, link, destination,
}:HeaderComponentProps) {
  const navigate = ReactRouterDom.useNavigate();

  const handleClick = () => navigate("/dashboard");

  const handleLinkClick = () => navigate(destination);

  return (
    <div className="header">
      <div className="global-link">
        <div className="logo-gt" onClick={() => handleClick()} />
        <span className="link" onClick={() => handleLinkClick()}>{link}</span>
      </div>
      {
        title ? <h1 className="title">{title}</h1>
          : titleComponent
      }

    </div>
  );
}
