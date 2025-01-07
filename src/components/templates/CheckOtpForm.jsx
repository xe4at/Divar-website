import { useState } from "react";
import { checkOtp } from "../../services/auth";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    setLoading(true);
    try {
      const { response, error } = await checkOtp(mobile, code);
      console.log({ response, error });

      if (response) {
        console.log("Response:", response);
      }

      if (error) {
        console.log("Error:", error.response.data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامکی</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "در حال بررسی..." : "ورود"}
      </button>
      <button type="button" onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;

// import { checkOtp } from "../../services/auth";

// function CheckOtpForm({ code, setCode, setStep, mobile }) {
//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (code.length !== 5) return;

//     const { response, error } = await checkOtp(mobile, code);
//     console.log({ response, error });
//     if (response) {
//       console.log(response);
//     }
//     if (error) console.log(error.response.data.message);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <p>تایید کد پیامکی</p>
//       <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
//       <label htmlFor="input">کد تایید را وارد کنید</label>
//       <input
//         type="text"
//         id="input"
//         placeholder="کد تایید"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />
//       <button type="submit">ورود</button>
//       <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
//     </form>
//   );
// }

// export default CheckOtpForm;
  