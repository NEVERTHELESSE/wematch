import Images from "../../components/Images";
import type { singleInterface } from "../../interface/single";

interface propsInterface {
  setSelectedUser: void;
  selected: singleInterface;
  allChats: {
    profilePics: string;
  }[];
}
interface chatInterface {
  profilePics: string;
}

export default function ChatLeftSideBar({
  setSelectedUser,
  selected,
  allChats,
}: propsInterface) {
  function changeChatUser(single: singleInterface) {
    setSelectedUser(single);
  }
  return (
    <aside className="h-full border shadow bg-gray-300  min-w-[25rem]">
      <h3 className="text-3xl m-2 font-bold p-2">Chats</h3>
      <a href="#289"></a>
      <section className="overflow-y-scroll h-full">
        {allChats.map((single: chatInterface, index: number) => (
          <div
            onClick={() => changeChatUser(single)}
            key={index}
            className={`flex items-center border-t border-tertiary ${
              single.id == selected.id && "bg-primary"
            }  hover:bg-gray-400 cursor-pointer p-2`}
          >
            <div className="min-w-[3rem] border border-primary min-h-[3rem] max-w-[3rem] max-h-[3rem] rounded-full overflow-hidden ">
              <Images src={`/users/${single.profilePics}`} />
            </div>
            <div className="ml-3 w-full">
              <p className="text-2xl">{single.fullname}</p>
              <div className="flex justify-between w-full">
                <p>Where are you living?</p>
                <i>Just Now</i>
              </div>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}
