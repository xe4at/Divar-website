import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import Loader from "../modules/Loader";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categoris"], getCategory);
  console.log({ data, isLoading });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug:{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
