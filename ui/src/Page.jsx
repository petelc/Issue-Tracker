/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import React from 'react';

import Contents from './Contents.jsx';

function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h3>do somehting here</h3>
    </div>
  );
}

export default function Page() {
  return (
        <div className="adj">
            <NavBar/>
            <Contents />
        </div>
  );
}
