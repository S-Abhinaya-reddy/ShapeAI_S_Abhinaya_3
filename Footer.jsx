import React from "react";
function Footer(){
  var currYear = newDate().getFullYear();
  return (
    <footer>
      <p>Copyright@{currYear}</p>
    </footer>
  );
}
export default Footer;
