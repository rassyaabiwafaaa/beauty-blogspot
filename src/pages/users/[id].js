import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";

const UserDetail = () => {
  // params
  const router = useRouter();
  const { id } = router.query;

  //user detail
  const [userDetail, setUserDetail] = useState([]);

  //   user post
  const [userPost, setUserPost] = useState([]);

  //   user comment
  const [userComment, setUserComment] = useState([]);

  function fetchData() {
    const detailUserAPI = `https://gorest.co.in/public/v2/users/${id}`;
    const userPostAPI = `https://gorest.co.in/public/v2/users/${id}/posts`;
    const userCommentAPI = `https://gorest.co.in/public/v2/posts/${id}/comments`;

    const getDetailUser = axios.get(detailUserAPI);
    const getUserPost = axios.get(userPostAPI);
    const getUserComment = axios.get(userCommentAPI);

    axios
      .all([getDetailUser, getUserPost, getUserComment])
      .then(
        axios.spread((...allData) => {
          const detailUser = allData[0].data;
          const detailUserPost = allData[1].data;
          const detailUserComment = allData[2].data;

          setUserDetail(detailUser);
          setUserPost(detailUserPost);
          setUserComment(detailUserComment);
        })
      )
      .catch(() => {
        router.push("/users");
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete() {
    const idData = id;

    if (window.confirm("Are sure want to delete?")) {
      axios
        .delete(`https://gorest.co.in/public/v2/users/${id}`, {
          headers: {
            Authorization: "Bearer 50dea47e8b4c366bcbd02e0c2dc022c35bcc5c5ca2002e5a96ccd3327125a44f",
          },
        })
        .then((res) => {
          alert("Data has ben deleted");
          router.push("/users");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleEdit() {
    router.push(`../users/edit-user/${id}`);
  }

  return (
    <>
      <Navigation />
      <div className="lg:px-[100px] px-[60px]">
        {/* User Profile Data */}
        <div className="my-20">
          <h1 className="font-bold mb-5 text-primary">User Profile Data</h1>
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
                  Gender
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-primary hover:bg-opacity-10 cursor-pointer">
                <td className="px-6 py-4">
                  <Link href={`/users/${userDetail.id}`}>{userDetail.name}</Link>
                </td>

                <td className="px-6 py-4">{userDetail.email}</td>
                <td className="px-6 py-4">{userDetail.gender}</td>
                <td className={`px-6 py-4 ${userDetail.status === "inactive" ? "text-red-600" : "text-green-600"}`}>{userDetail.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* User Post */}
        <div className="my-20">
          <h1 className="font-bold mb-5 text-primary">User Posts</h1>
          <table className="lg:w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Title
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Body
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {userPost >= 1 ? (
                <tr className="hover:bg-primary hover:bg-opacity-10 cursor-pointer">
                  <td className="px-6 py-4">
                    <Link href={`/users/${userDetail.id}`}>{userDetail.name}</Link>
                  </td>

                  <td className="px-6 py-4">{userDetail.email}</td>
                  <td className="px-6 py-4">
                    <Link href={"/"}>Link to blog</Link>
                  </td>
                </tr>
              ) : (
                <tr className="py-5">
                  <td className="py-5 text-center" colSpan={3}>
                    <h2>No blogs have been created by this user</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* User Comments */}
        <div className="my-10">
          <h1 className="font-bold mb-5 text-primary">User Comments</h1>
          <table className="lg:w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Comment
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {userComment.length >= 1 ? (
                <tr className="hover:bg-primary hover:bg-opacity-10 cursor-pointer">
                  <td className="px-6 py-4">
                    <Link href={`/users/${userDetail.id}`}>{userDetail.name}</Link>
                  </td>

                  <td className="px-6 py-4">Go to Posts</td>
                </tr>
              ) : (
                <tr className="py-5">
                  <td className="py-5 text-center" colSpan={2}>
                    <h2>No comments have been left by this user on any articles</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Update and Delete */}
        <div className="flex gap-5 mb-10">
          <button className="bg-primary rounded-md px-10 py-2 text-white" onClick={handleEdit}>
            <MdEdit size={24} />
          </button>
          <button className="bg-red-600 rounded-md px-10 py-2 text-white" id={userDetail.id} onClick={handleDelete}>
            <MdDelete size={24} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDetail;
