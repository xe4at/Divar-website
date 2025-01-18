// import React from "react";

// function PageNotFound() {
//   return <div>PageNotFound</div>;
// }

// export default PageNotFound;
import React from "react";
import '../styles/PageNotFound.css';  // فایل CSS را برای استایل دهی اضافه کنید

function PageNotFound() {
  return (
    <div className="page-not-found">
      <img src="./404-error.svg" alt="Page Not Found" />
      <h1>اوه! صفحه‌ای که دنبال آن بودید یافت نشد.</h1>
      <p>متاسفانه صفحه مورد نظر شما پیدا نشد. شاید بخواهید به صفحه اصلی برگردید.</p>
      <a href="/" className="home-link">بازگشت به صفحه اصلی</a>
    </div>
  );
}

export default PageNotFound;
