import { NavLink } from "react-router-dom";
function About(){
    return<>
    <h1 className="text-center my-4 ">About Us</h1>
    <div classNameName="container">

<div className="row featurette border rounded my-4 mx-5 ">
  <div className="col-md-7 order-md-2 py-4 ">
    <h2 className="featurette-heading fw-normal lh-1">Amazon is a world best products company. <span className="text-body-secondary">See for yourself.</span></h2>
    <p className="lead ">Amazon.com is an e-commerce platform that sells many product lines, including media (books, movies, music, and software), apparel, baby products, consumer electronics, beauty products, gourmet food, groceries, health and personal care products, industrial & scientific supplies, kitchen items, jewelry, watches, lawn and garden items, musical instruments, sporting goods, tools, automotive items, toys and games, and farm supplies[45] and consulting services.[46] Amazon websites are country-specific (for example, amazon.com for the US and amazon.fr for France), though some offer international shipping.[47]</p>
    <NavLink to='/contact' type="button" className="btn btn-outline-primary">Contact Us</NavLink>
  </div>
  <div className="col-md-5 order-md-1 py-4">
    <img src="./images/aboutamazon.jpg" alt="About Amazon"className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"  />
  </div>
</div>
    </div>
    </>
}
export default About;