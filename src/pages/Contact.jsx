import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
// import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Ufo from "../models/Ufo";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Hovering");
  let [isHovering, setIsHovering] = useState(false);
  let [isAbducting, setIsAbducting] = useState(false);
  let [isZooming, setIsZooming] = useState(false);
  let [resetPosition, setResetPosition] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setIsAbducting(true);
    setCurrentAnimation("Abduction Force Field");
  };

  const handleBlur = () => {
    setResetPosition(true);

    setIsHovering(true);
    setIsAbducting(false);

    setCurrentAnimation("Hovering");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsZooming(true);
    setCurrentAnimation("Zooming");
    setIsLoading(true);

    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Demetrice",
          from_email: form.email,
          to_email: "miner.forty9ers@gmail.com",
          message: form.message,
        },
        this
      )
      .then(() => {
        setIsLoading(false);

        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("Hovering");
          setIsHovering(true);
          setIsZooming(false);
          setForm({ name: "", email: "", message: "" });
        }, 5000);
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "An Error has occurred.",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          action=""
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              required
              value={form.email}
              placeholder="You"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="" className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              type="textarea"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            disabled={isLoading}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          id="foxCanvas"
          camera={{ position: [0, 0, 10], fov: 100, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={2.5} position={(0, 0, 1)} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Ufo
              currentAnimation={currentAnimation}
              isAbducting={isAbducting}
              isZooming={isZooming}
              isHovering={isHovering}
              resetPosition={resetPosition}
              rotation={[13, 5, 0]}
              scale={3}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
