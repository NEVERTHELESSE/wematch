import { useEffect, useState } from "react";
import ChatLeftSideBar from "./ChatLeftSideBar";
import Messages from "./Messages";
import { useLocation } from "react-router-dom";
import { singles } from "../discover/single";

export default function Chats() {
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    profilePic: "",
    lastMessage: "",
  });
  const id = useLocation().search.split("?")[1].split("=")[1];
  const [allChats, setAllChats] = useState(singles);
  useEffect(() => {
    const user = singles.find((r) => r.id == id);
    if (user != undefined) {
      setSelectedUser(user);
    }
  }, []);

  return (
    <section className=" flex h-[100vh] pt-[4rem]">
      <section className="w-full border rounded-2xl overflow-hidden h-full flex">
        <ChatLeftSideBar
          setSelectedUser={setSelectedUser}
          selected={selectedUser}
          allChats={allChats}
        />
        {selectedUser.username == "" ? (
          <main className="flex p-4 flex-col text-center justify-center items-center w-max">
            <h3 className="text-7xl my-6 font-bold text-gray-500">
              Select a Chat to start messaging
            </h3>
            <h4 className="text-3xl ">All messages are end to end encrypted</h4>
          </main>
        ) : (
          <Messages user={selectedUser} />
        )}
      </section>
    </section>
  );
}
