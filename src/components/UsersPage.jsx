import react from 'react';


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";

export const UsersPage = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
     
      const response = await fetch(`${process.env.REACT_APP_FRESH_MARKET_API}/users`);
      const data = await response.json();
      console.log(data);
      setUsers(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="flex justify-center items-center h-screen">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 md:ml-64 min-h-screen">
          <h3 class="text-gray-700 text-3xl ml-6 mt-4 mb-4 font-medium">Users</h3>

            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                
                  </div>
                
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th class="px-4 py-3">FirstName</th>
                        <th class="px-4 py-3">LastName</th>
                        <th class="px-4 py-3">Email</th>
                        
                        <th class="px-4 py-3">Edit</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {users !== null &&
                        users.map((users) => {
                          return (
                            <tr class="border-b text-black dark:border-gray-700">
                              <td class="px-4 py-3">{users.firstName}</td>
                              <td class="px-4 py-3">{users.lastName}</td>
                              <td class="px-4 py-3">{users.email}</td>
                              
                              
                              <td class="px-4 py-3">
                                <Link to={`/users/${users._id}/edit`}>
                                  <MdEdit className="text-black text-xl" />
                                </Link>
                              </td>
                              <td class="px-4 py-3">
                                <usersDelete usersId={users._id} />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
