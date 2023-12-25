import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const Submit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname} My phone no is ${data.phone} email ${data.email} msg ${data.msg}`
    );
  };
  return (
    <>
      <form onSubmit={Submit}>
        <div className="form">
          <h1 style={{ textAlign: "center" }}> contact us</h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter you name"
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
            />
            <label for="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your phone"
              name="phone"
              value={data.phone}
              onChange={InputEvent}
            />
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={InputEvent}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="msg"
              value={data.msg}
              onChange={InputEvent}></textarea>
          </div>
        </div>
        <div className="submit">
          <button className="btn btn-outline-primary">Submit Form</button>
        </div>
      </form>
    </>
  );
}
