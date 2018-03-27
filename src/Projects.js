import React, { Component } from "react";
 
class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Who and what have we helped with so far: Projects</h2>
        <ul class="project-list">
          <li>
		<div class="project-row">
			<div class="project-row-image"><img src="/assets/lltv.jpg" width="95%"/></div>
			<div class="project-row-desc">
				<h3>LLTV - Learning Library TV</h3>
				<p>A Learning Management SaaS platform built around engineering content to enable users to learn from anywhere in the world on a intuitive and easy to use web platform.
				</p>
				<ul>
					<li>Content Management Systems</li>
					<li>Ecommerce Platform and Integration</li>
					<li>Digital Media Hosting</li>
				</ul>
			</div>
		</div>
	  </li>
          <li>
		<div class="project-row">
			<div class="project-row-image"><img src="/assets/fitmoo.jpg" width="95%"/></div>
			<div class="project-row-desc">
				<h3>Fitmoo - Now known as ActionHouse</h3>
				<p>
				A social affiliate marketplace for everything fitness. The TBM lead the development of product and engineering and helped fitmoo develop a world class e-commerce production on top of a innovative social affiliate platform built from scratch.
				</p>
				<ul>
					<li>Social Commerce</li>
					<li>Mobile Applications - IOS / Android</li>
					<li>Affiliate Marketing</li>
				</ul>
			</div>
		</div>
	  </li>
          <li>
		<div class="project-row">
			<div class="project-row-image"><img src="/assets/fitmoo.jpg" width="95%"/></div>
			<div class="project-row-desc">
				<h3>Kraus USA</h3>
				<p>
				Help Kraus USA to transition from simple excel driven environment to a robust and enterprise information architecture with implementation of a state of the art, ecommerce and web assets, EDI integration, CRM, ERP and Business Intelligence platforms and ReBrand themselves as an industry leader in the realm of fashion plumbing.
				</p>
				<ul>
					<li>B2B eCommerce - EDI, Marketplace integration</li>
					<li>Mobile & Web Applications</li>
					<li>Logistics and Supply chain</li>
				</ul>
			</div>
		</div>
	  </li>
        </ul>
      </div>
    );
  }
}
 
export default Projects;
