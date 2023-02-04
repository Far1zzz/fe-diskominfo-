import React from "react";
import "../assets/css/home.css";
import Content1 from "../assets/img/63CC610C-901F-41DB-AFC8-EAEDA6F73B15-1440x564_c.jpeg";
import Content2 from "../assets/img/IMG-20230118-WA0022-1440x564_c.jpg";

function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid mt-3">
        <div className="container">
          <div class="news-container">
            <div class="border">
              <div className="terkini">
                <p class="title">Berita</p>
                <p class="titles">Terkini</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 -3">
              <div className="content1">
                <div className="content1-bg">
                  <img src={Content1} alt="" />
                  <div className="box-news">
                    <h5>
                      Pengumuman hasil akhir tes programmer dan desain grafis
                      pada tanggal 20 april
                    </h5>
                  </div>
                </div>
                <div className="breaking">
                  <h4>Kamis, 5 Januari 2023</h4>
                  <h6>5 Menit yang lalu</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="content2">
                <img src={Content2} alt="Berita terkini 1" />
                <div className="box-news">
                  <h5>PERTEMUAN KEPALA DINAS KOMINFO </h5>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2 mb-3">
              <div className="card">
                <div className="card-header">ahhaha</div>
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  sint adipisci laboriosam officiis modi omnis perspiciatis in
                  corporis iusto excepturi a nisi dolore, mollitia animi
                  voluptate accusantium molestiae quidem doloremque.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
