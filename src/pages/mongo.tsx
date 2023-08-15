import React, { useState } from "react";
import mongo from "../../lib/dbConnect";
import Test from "../../models/Test";

interface MongoProps {
  mongoConnected: boolean;
}

const Mongo: React.FC<MongoProps> = ({ mongoConnected }) => {
  const [form, setForm] = useState({ name: "", restaurant_id: "" });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    fetch("/api/hello", { method: "post", body: JSON.stringify(form) })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  return (
    <div className="flex flex-col gap-2 items-start p-8">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h1>DB {!mongoConnected && "not"} connected</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="px-2 text-slate-700"
          value={form.name}
          onChange={handleOnChange}
        />
        <label>ID</label>
        <input
          type="text"
          placeholder="ID"
          name="restaurant_id"
          className="px-2 text-slate-700"
          value={form.restaurant_id}
          onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Mongo;

export async function getServerSideProps() {
  let mongoConnected = false;
  mongo()
    .then(async () => {
      mongoConnected = true;
      await Test.find({})
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));

  // const test = new Test({ hola: "nijao" });
  // test
  //   .save()
  //   .then(() => console.log("nijao"))
  //   .catch((e: any) => console.log("error", e));
  return { props: { mongoConnected } };
}
