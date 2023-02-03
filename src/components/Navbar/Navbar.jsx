import React from "react";
import Logo from "../../assets/LOGO DISKOM.png";
import "./custom.css";
const Navbar = () => {
	return (
		<>
			<div className="navigationBar ">
				<div className="container ">
					
					<div className="d-flex flex-lg-row  flex-column justify-content-between">
						<div className="mr-auto p-2 logo">
							<img src={Logo} alt="" width={"275px"} />
						</div>

						<div className="nav p-2">
							<div className=" promotionBanner"></div>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navigation">
				<div className="container">
					<button
						id="two"
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Beranda
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Profil
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Visi & Misi
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Informasi Publik
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Banyuasin TV
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#"></a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<form class="d-flex" role="search">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Cari"
							aria-label="Search"
						/>
						<button class="btn bg-white" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
