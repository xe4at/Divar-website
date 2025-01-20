import { useState } from "react";
import { sendOtp } from "services/auth";

import styles from "./SendOtpForm.module.css";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) {
      setErrorMessage("طول شماره موبایل باید ۱۱ رقم باشد.");
      return;
    }

    const { response, error } = await sendOtp(mobile);

    if (response) {
      setStep(2);
      setErrorMessage(""); 
    }
    if (error) {
      setErrorMessage(error.response?.data?.message || "خطایی رخ داده است.");
    }

    // console.log({ response, error });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید . کد
        تایید شده به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;

// import { sendOtp } from "../../services/auth";

// function SendOtpForm({ mobile, setMobile, setStep }) {
//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (mobile.length !== 11) return;

//     const { response, error } = await sendOtp(mobile);

//     if (response) setStep(2);
//     if (error) console.log(error.response.data.message);
//     console.log({ response, error });
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <p>ورود به حساب کاربری</p>
//       <span>
//         برای استفاده از امکانات ویوار لطفا شماره موبایل خود را وارد کنید . کد
//         تایید شده به این شماره پیامک خواهد شد.
//       </span>
//       <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
//       <input
//         type="text"
//         id="input"
//         placeholder="شماره موبایل"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//       />
//       <button type="submit">ارسال کد تایید</button>
//     </form>
//   );
// }

// export default SendOtpForm;
