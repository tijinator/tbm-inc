import React, { Component } from "react";
 
class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Who and what have we helped with so far: Projects</h2>
        <ul class="project-list">
          <li>
		<div class="project-row">
			<div class="project-row-image">
				<a href="http://www.fitfightme.com" target="_blank">
					<img src="/assets/fitfightme.jpg" width="95%"/>
				</a>
			</div>
			<div class="project-row-desc">
				<h3><a href="http://www.fitfightme.com" target="_blank">FitFight</a></h3>
				<p>
					FitFight is a combat veteran owned and operated mobile platform that allows every user to engage in fitness competitions. We were founded on the principle that superior fitness can be achieved through constant competition.
				</p>
				<ul>
					<li>Mobile App Platforms</li>
					<li>Social / Fitness Competitions</li>
					<li>Ecommerce / Payment Gateways</li>
				</ul>
			</div>
		</div>
	  </li>
          <li>
		<div class="project-row">
			<div class="project-row-image">
				<a href="https://commcx.com" target="_blank">
					<img src="/assets/commcx.jpg" width="95%"/>
				</a>
			</div>
			<div class="project-row-desc">
				<h3><a href="https://commcx.com" target="_blank">Comm CX</a></h3>
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
			<div class="project-row-image">
				<a href="https://fitmoo.com" target="_blank">
					<img src="/assets/fitmoo.jpg" width="95%"/>
				</a>
			</div>
			<div class="project-row-desc">
				<h3><a href="https://fitmoo.com" target="_blank">Fitmoo - Now known as ActionHouse</a></h3>
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
			<div class="project-row-image">
				<a href="https://kraususa.com" target="_blank">
					<img src="/assets/kraususa.jpg" width="95%"/>
				</a>
			</div>
			<div class="project-row-desc">
				<h3><a href="https://kraususa.com" target="_blank">Kraus USA</a></h3>
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
	<h3>
		and many more...
	</h3>
      </div>
    );
  }
}
 
export default Projects;
