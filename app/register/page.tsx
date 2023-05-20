"use client";
import { useState } from "react";
import { setRegister } from "../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    const userForm = {
      name,
      email,
      password,
    };

    const result = await setRegister(userForm);

    if (result.is_success == 0 || result.data.is_show == 0) {
      toast.error(result.data.m);
    } else {
      toast.success("Registrasi Berhasil", { autoClose: false });
      toast.success(JSON.stringify(result.data), { autoClose: false });
      // router.push("/");
    }
  };

  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <div className="pt-50">
              <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                Full Name
              </label>
              <input
                type="text"
                className="form-control rounded-pill text-lg"
                value={name}
                onChange={(event) => setName(event?.target.value)}
                aria-describedby="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="pt-30">
              <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                Email Address
              </label>
              <input
                type="email"
                className="form-control rounded-pill text-lg"
                value={email}
                onChange={(event) => setEmail(event?.target.value)}
                aria-describedby="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="pt-30">
              <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-pill text-lg"
                value={password}
                onChange={(event) => setPassword(event?.target.value)}
                aria-describedby="password"
                placeholder="Your password"
              />
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
              <button
                type="button"
                className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16 btn-secondary"
                role="button"
                onClick={onSubmit}
              >
                Continue
              </button>
              <Link
                href="/login"
                className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill btn-secondary"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
