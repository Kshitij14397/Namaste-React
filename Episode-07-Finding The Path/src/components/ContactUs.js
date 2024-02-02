import React from "react";
console.log("ContactUs Component Called outside");
const ContactUs = () => {
  console.log("ContactUs Component Called inside");
  return (
    <div>
      <h1>To Contact:</h1>
      <h2>Call us at +918726537329</h2>
    </div>
  );
};

export default ContactUs;
