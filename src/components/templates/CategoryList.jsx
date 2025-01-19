import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "../../services/admin";
import Loader from "../modules/Loader";
import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["get-categoris"], getCategory);
  const deleteMutation = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categoris"]);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id} className={styles.card}>
            <img src={`${i.icon}.svg`} alt={`${i.name} icon`} />
            <h5>{i.name}</h5>
            <p>slug: {i.slug}</p>
            <button onClick={() => handleDelete(i._id)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;

// import { useQuery } from "@tanstack/react-query";
// import { getCategory } from "../../services/admin";
// import Loader from "../modules/Loader";
// import styles from "./CategoryList.module.css";

// function CategoryList() {
//   const { data, isLoading } = useQuery(["get-categoris"], getCategory);
//   console.log({ data, isLoading });

//   return (
//     <div className={styles.list}>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         data.data.map((i) => (
//           <div key={i._id}>
//             <img src={`${i.icon}.svg`} />
//             <h5>{i.name}</h5>
//             <p>slug:{i.slug}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default CategoryList;
