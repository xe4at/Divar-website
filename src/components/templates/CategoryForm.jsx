import { useState } from "react";
import styles from "./CategoryForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    conflict: false,
  });
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      setFormStatus({ success: true, error: false, conflict: false });
      setForm({ name: "", slug: "", icon: "" });
      setTimeout(() => {
        setFormStatus({ success: false, error: false, conflict: false });
      }, 4000);
    },
    onError: (error) => {
      setLoading(false);
      if (error.response && error.response.status === 409) {
        setFormStatus({ success: false, error: false, conflict: true });
      } else {
        setFormStatus({ success: false, error: true, conflict: false });
      }
      setTimeout(() => {
        setFormStatus({ success: false, error: false, conflict: false });
      }, 4000);
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setValidationError("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) {
      setValidationError("همه فیلدها باید پر شوند");
      return;
    }
    mutate(form);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h3>دسته بندی جدید</h3>

      <label htmlFor="name">اسم دسته بندی</label>
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={changeHandler}
      />

      <label htmlFor="slug">اسلاگ</label>
      <input
        type="text"
        name="slug"
        id="slug"
        value={form.slug}
        onChange={changeHandler}
      />

      <label htmlFor="icon">آیکون</label>
      <input
        type="text"
        name="icon"
        id="icon"
        value={form.icon}
        onChange={changeHandler}
      />

      {validationError && <p>{validationError}</p>}
      {formStatus.error && <p>مشکلی پیش اومده جیگر</p>}
      {formStatus.conflict && <p>دسته بندی با این نام وجود دارد</p>}
      {formStatus.success && <p>دسته بندی با موفقیت ایجاد شد</p>}

      {loading && <p>در حال بارگذاری...</p>}

      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;

// import { useState } from "react";
// import styles from "./CategoryForm.module.css";
// import { useMutation } from "@tanstack/react-query";
// import { addCategory } from "../../services/admin";

// function CategoryForm() {
//   const [form, setForm] = useState({ name: "", slug: "", icon: "" });

//   const { mutate, isLoading, error, data } = useMutation(addCategory);
//   console.log({ isLoading, error, data });

//   const changeHandler = (event) => {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (!form.name || !form.slug || !form.icon) return;
//     mutate(form);
//   };

//   return (
//     <form
//       onChange={changeHandler}
//       onSubmit={submitHandler}
//       className={styles.form}
//     >
//       <h3>دسته بندی جدید</h3>

//       <label htmlFor="name">اسم دسته بندی</label>
//       <input type="text" name="name" id="name" />

//       <label htmlFor="slug">اسلاگ</label>
//       <input type="text" name="slug" id="slug" />

//       <label htmlFor="icon">آیکون</label>
//       <input type="text" name="icon" id="icon" />

//       {!error && <p>مشکلی پیش اومده جیگر</p>}
//       {data?.status === 201 && <p>دسته بندی با موفقیت ایجاد شد</p>}

//       <button type="submit" disabled={isLoading}>
//         ایجاد
//       </button>
//     </form>
//   );
// }

// export default CategoryForm;
