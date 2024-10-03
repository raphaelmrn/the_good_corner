import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Category } from "../types/Category";

export default function AdCreaForm() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const { data } = await axios.get<Category[]>(
      "http://localhost:4000/categories"
    );
    setCategories(data);
  }

  // async function fetchTags(){
  //   const {data} = await axios.get("http://localhost:4000/tags")
  // }
  useEffect(() => {
    fetchCategories();
    // fetchTags()
  }, []);
  const hSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());

    const response = await axios.post("http://localhost:4000/ads", formJson);
    console.log("Annonce ajoutée avec succès:", response.data);
  };

  return (
    <form onSubmit={hSubmit}>
      <label>
        Title:
        <input className="text-field" name="title" />
      </label>
      <label>
        Description:
        <input className="text-field" name="description" />
      </label>
      <label>
        Owner:
        <input className="text-field" name="owner" />
      </label>
      <label>
        Price:
        <input className="text-field" name="price" />
      </label>
      <label>
        Picture:
        <input className="text-field" name="picture" />
      </label>
      <label>
        Location:
        <input className="text-field" name="location" />
      </label>
      <select name="categoryId">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="button">Create Ad!</button>
    </form>
  );
}
