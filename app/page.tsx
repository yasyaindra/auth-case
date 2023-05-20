"use client";

export default async function Home() {
  return (
    <>
      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
              <p className="text-support text-lg color-palette-2">
                Halo gamers,
              </p>
              <h1 className="header-title color-palette-1 fw-bold">
                Topup & Get <span className="d-sm-inline d-none">a</span>
                <span className="d-sm-none d-inline">a</span>
                <span className="underline-blue"> New</span>{" "}
                <br className="d-sm-block d-none" />{" "}
                <span className="underline-blue">Experience</span> in Gaming
              </h1>
              <p className="mt-30 mb-40 text-lg color-palette-1">
                Kami menyediakan jutaan cara untuk membantu
                <br className="d-md-block d-none" /> players menjadi pemenang
                sejati
              </p>
              <div className="d-flex flex-lg-row flex-column gap-4">
                <a
                  className="btn btn-get text-lg text-white rounded-pill btn-secondary"
                  href="/register"
                  role="button"
                >
                  Register
                </a>
                <a
                  className="btn-learn text-lg color-palette-1 my-auto text-center"
                  href="#"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <img src="/img/Header-1.png" className="img-fluid" alt="" />
                  <div className="card right-card position-absolute border-0">
                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                      <img
                        src="/img/Header-3.png"
                        className="rounded-pill"
                        alt=""
                      />
                      <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                        New
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-center m-0 fw-medium color-palette-1">
                        Lann Knight
                      </p>
                      <p className="fw-light text-center m-0 color-palette-2 text-xs">
                        Dota 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br /> Easy to Win the Game
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon1)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <mask
                      id="mask1"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="-12"
                      y="23"
                      width="67"
                      height="73"
                    >
                      <path
                        d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
                        fill="#4D17E2"
                      />
                    </mask>
                    <g mask="url(#mask1)">
                      <path
                        d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
                        fill="#695DE9"
                      />
                      <path
                        d="M37 55H-4"
                        stroke="white"
                        strokeWidth="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23 64L-4 64"
                        stroke="#B7B0F4"
                        strokeWidth="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="23"
                        y="13"
                        width="52"
                        height="34"
                        rx="13"
                        fill="#5C52C7"
                      />
                    </g>
                    <rect
                      x="27"
                      y="16"
                      width="41"
                      height="27"
                      rx="13"
                      fill="#2B2467"
                    />
                    <circle
                      cx="47.5"
                      cy="29.5"
                      r="5.5"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  1. Start
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Pilih salah satu game
                  <br />
                  yang ingin kamu top up
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon2"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon2)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect
                      x="-14"
                      y="16"
                      width="62"
                      height="82"
                      rx="16"
                      fill="#695DE9"
                    />
                    <path
                      d="M32 36H5"
                      stroke="white"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 45L9 45"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="56"
                      y="37"
                      width="49"
                      height="75"
                      rx="16"
                      fill="#2B2467"
                    />
                    <path
                      d="M97 50H70"
                      stroke="white"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M92 59L74 59"
                      stroke="#6B63AC"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  2. Fill Up
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Top up sesuai dengan
                  <br />
                  nominal yang sudah tersedia
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card feature-card border-0">
                <svg
                  className="mb-30"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0-icon3"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                  </mask>
                  <g mask="url(#mask0-icon3)">
                    <circle cx="40" cy="40" r="40" fill="#D7D7F8" />
                    <rect
                      x="13"
                      y="25"
                      width="54"
                      height="61"
                      rx="16"
                      fill="#695DE9"
                    />
                    <path
                      d="M50 46L50 68"
                      stroke="white"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40 54L40 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 60L30 68"
                      stroke="#B7B0F4"
                      strokeWidth="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="40" cy="26" r="14" fill="#2B2467" />
                    <path
                      d="M39.0489 18.927C39.3483 18.0057 40.6517 18.0057 40.9511 18.9271L42.0206 22.2188C42.1545 22.6309 42.5385 22.9098 42.9717 22.9098H46.4329C47.4016 22.9098 47.8044 24.1494 47.0207 24.7188L44.2205 26.7533C43.87 27.0079 43.7234 27.4593 43.8572 27.8713L44.9268 31.1631C45.2261 32.0844 44.1717 32.8506 43.388 32.2812L40.5878 30.2467C40.2373 29.9921 39.7627 29.9921 39.4122 30.2467L36.612 32.2812C35.8283 32.8506 34.7739 32.0844 35.0732 31.1631L36.1428 27.8713C36.2766 27.4593 36.13 27.0079 35.7795 26.7533L32.9793 24.7188C32.1956 24.1494 32.5984 22.9098 33.5671 22.9098H37.0283C37.4615 22.9098 37.8455 22.6309 37.9794 22.2188L39.0489 18.927Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                  3. Be a Winner
                </p>
                <p className="text-lg color-palette-1 mb-0">
                  Siap digunakan untuk
                  <br />
                  improve permainan kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="" className="mb-30">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                    >
                      <circle cx="30" cy="30" r="30" fill="#3546AB" />
                    </mask>
                    <g mask="url(#mask0)">
                      <circle cx="30" cy="30" r="30" fill="#00BAFF" />
                      <path
                        d="M41.5001 35.0001C52.3001 38.2001 49.6668 48.0001 47.0001 52.5001L71.0001 60.5001L79.5001 -12.9999C63.6667 -13.8333 29.5001 -14.9999 19.5001 -12.9999C7.00007 -10.4999 13.5001 4.00006 12.0001 14.0001C10.5001 24.0001 28.0001 31.0001 41.5001 35.0001Z"
                        fill="#4D17E2"
                      />
                      <path
                        d="M54.495 47.785C54.495 51.285 53.655 54.54 51.975 57.55C50.295 60.56 47.74 63.01 44.31 64.9C40.88 66.79 36.645 67.735 31.605 67.735C26.705 67.735 22.33 66.86 18.48 65.11C14.7 63.29 11.655 60.84 9.345 57.76C7.105 54.61 5.81 51.04 5.46 47.05H15.645C15.855 49.15 16.555 51.215 17.745 53.245C19.005 55.205 20.755 56.85 22.995 58.18C25.305 59.44 28.07 60.07 31.29 60.07C35.49 60.07 38.71 58.95 40.95 56.71C43.19 54.47 44.31 51.6 44.31 48.1C44.31 45.09 43.505 42.64 41.895 40.75C40.355 38.86 38.43 37.39 36.12 36.34C33.81 35.22 30.66 34.03 26.67 32.77C21.98 31.23 18.2 29.795 15.33 28.465C12.53 27.065 10.115 25 8.085 22.27C6.125 19.54 5.145 15.935 5.145 11.455C5.145 7.60499 6.055 4.20999 7.875 1.27C9.765 -1.67 12.425 -3.945 15.855 -5.555C19.355 -7.165 23.45 -7.97 28.14 -7.97C35.42 -7.97 41.195 -6.185 45.465 -2.615C49.735 0.884996 52.22 5.365 52.92 10.825H42.63C42.07 7.885 40.565 5.295 38.115 3.055C35.665 0.814997 32.34 -0.305003 28.14 -0.305003C24.29 -0.305003 21.21 0.709996 18.9 2.73999C16.59 4.69999 15.435 7.5 15.435 11.14C15.435 14.01 16.17 16.355 17.64 18.175C19.18 19.925 21.07 21.325 23.31 22.375C25.55 23.355 28.63 24.475 32.55 25.735C37.31 27.275 41.125 28.745 43.995 30.145C46.935 31.545 49.42 33.68 51.45 36.55C53.48 39.35 54.495 43.095 54.495 47.785Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  StoreGG membantu gamers
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Company
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Press Release
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Privacy & Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Support
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Unlock Rewards
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Live Chatting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Connect
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="mailto: hi@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          hi@store.gg
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="mailto: team@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          team@store.gg
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Pasific 12, Jakarta Selatan
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="tel: 02111229090"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          021 - 1122 - 9090
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
