import Navigation from "@/components/Navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import Footer from "@/components/Footer";
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  function getUser() {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => {
        const data = response.data;
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Navigation />

      <div className="lg:px-[100px] px-[60px]">
        <div className="my-20">
          <div>
            <form onSubmit={handleSubmit}>
              <input type={"text"} placeholder="search by name" className="p-2 border-2 mb-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
          </div>
          <table className="lg:w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {users
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <tr className="hover:bg-primary hover:bg-opacity-10" key={item.id}>
                      <td className="px-6 py-4">
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/users/${item.id}`}>{item.email}</Link>
                      </td>
                      <td className={`px-6 py-4 ${item.status === "inactive" ? "text-red-600" : "text-green-600"}`}>
                        <Link href={`/users/${item.id}`}>{item.status}</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div className="mt-10">
            <Link href={"/users/create-user"} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create New User
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Users;
