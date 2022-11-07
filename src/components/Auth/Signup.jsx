import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signup } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Signup = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: "",
    phoneNo: "",
    DLNumber: "as",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    closeModal();
    try {
      signup(
        userData.email,
        userData.password,
        userData.fullName,
        userData.DLNumber,
        userData.phoneNo
      );
    } catch (error) {
      alert("error!");
    }
    setUserData({
      fullName: "",
      email: "",
      password: "",
      DLNumber: "",
      phoneNo: "",
    });
    navigate("/");
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-parkit-200 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2 w-full flex flex-col gap-3">
                    <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="fullName">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={userData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-parkit-100"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="phoneNo">
                          Phone No
                        </label>
                        <input
                          type="text"
                          id="phoneNo"
                          value={userData.phoneNo}
                          onChange={handleChange}
                          placeholder="9810XXXX01"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-parkit-100"
                        />
                      </div>
                      {/* <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="DLNumber">
                          DLNumber
                        </label>
                        <input
                          type="text"
                          id="DLNumber"
                          value={userData.DLNumber}
                          onChange={handleChange}
                          placeholder="HR-0619850034761"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-parkit-100"
                        />
                      </div> */}
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          value={userData.email}
                          onChange={handleChange}
                          placeholder="user@email.com"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-parkit-100"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="*******"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <button
                        className="w-full text-center bg-violet-600  font-bold p-2 rounded-lg mt-2 cursor-pointer hover:bg-violet-700  "
                        onClick={submit}
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signup;
