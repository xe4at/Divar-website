function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ code, mobile });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامکی</p>
      <span>کد پیامک شده به شماره {mobile}را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
