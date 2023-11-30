import { NavLink } from "react-router-dom";

function Contact(){
    return<>
    <h1 className="text-center my-4 ">Contact Us</h1>
    <div className="container my-4 border py-2 rounded">
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="full name"/>
</div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email Id</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="full address with taluka district state & pincode"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<NavLink to='/' type="button" className="btn btn-outline-primary">Send Message</NavLink>
    </div>
    </>
}
export default Contact;