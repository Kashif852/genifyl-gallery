"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
  })
  .required();

export default function Message() {
  const form = useRef(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({ 
    resolver: yupResolver(schema) 
  });

  const sendEmail = (data) => {
    emailjs.send(
      'service_lnmh9h6',
      'template_oh2vlq3',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Genifyl',
      },
      'AsiQh_mbe0WQyp9OW'
    )
    .then((result) => {
      toast.success('Message sent successfully', { 
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      reset();
    })
    .catch((error) => {
      toast.error('Failed to send message', { 
        position: 'top-center',
        type: 'error' 
      });
      console.log(error.text);
    });
  };

  return (
    <div className="box-messages">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <div className="main-title" style={{color: "white"}}>
                Send Us{" "}
                <span className="animation-text green-color" style={{color: "#09b6a2"}}>Message</span>
              </div>
            </div>
          </div>
          <div className="col-12" >
            <div className="widget-reply wow fadeInUp" style={{background: "linear-gradient(163deg, rgba(255, 255, 255, 0.15) 0%, rgba(9, 182, 162, 0.1) 100%)"}}>
              <form ref={form} onSubmit={handleSubmit(sendEmail)} className="comment-form">
                <div className="columns flex justify-between gap20">
                  <fieldset className="name">
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Full Name"
                      className="mb-20"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </fieldset>
                  <fieldset className="email">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email Address"
                      className="mb-20"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </fieldset>
                </div>
                <div className="columns flex justify-between gap20">
                  <fieldset className="subject">
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Subject"
                      className="mb-20"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject}</p>
                    )}
                  </fieldset>
                </div>
                <fieldset className="message">
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Message"
                    className="mb-20"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </fieldset>
                <div className="text-center">
                  <button type="submit" style={{background: "#09b6a2"}}>
                    Send Us Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}