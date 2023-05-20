"use client";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { setLogin } from "../services/auth";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error("Email dan password wajib diisi");
    } else {
      const response = await setLogin(data);

      if (response.is_success == 0) {
        toast.error(response.data.m);
      } else {
        toast.success("Login Berhasil", { autoClose: false });
        toast.success(JSON.stringify(response.data), {
          autoClose: false,
        });
        // router.push("/");
      }
    }
  };

  return (
    <>
      <section className="sign-in mx-auto">
        <div className="row justify-content-center mx-auto mt-5">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="">
              <div className="container mx-auto">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                  Sign In
                </h2>
                <p className="text-lg color-palette-1 m-0">
                  Masuk untuk melakukan proses top up
                </p>
                <div className="pt-50">
                  <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="pt-30">
                  <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill text-lg"
                    aria-describedby="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="button-group d-flex flex-column mx-auto pt-50">
                  <button
                    type="button"
                    className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16 btn-primary"
                    role="button"
                    onClick={onSubmit}
                  >
                    Continue to Sign In
                  </button>
                  <Link
                    href="/register"
                    className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill btn-secondary"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
