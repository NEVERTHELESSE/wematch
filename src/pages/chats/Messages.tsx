import Images from "../../components/Images";
import AllMessages from "./AllMessages";
import FooterSendMessage from "./FooterSendMessage";

export default function Messages({ user }) {
  return (
    <section className="w-full relative">
      <div className="p-2 border-b flex items-center justify-between">
        <div className="flex items-center justify-between ">
          <div className="w-[3rem] h-[3rem] rounded-full relative">
            <div className="w-[15px] h-[15px] bg-green-500 absolute rounded-full border bottom-0 right-0"></div>
            <div className="w-full h-full rounded-full overflow-hidden">
              <Images src={`/users/${user.profilePics}`} />
            </div>
          </div>
          {user.profilePic}
          <div className="ml-2">
            <h3 className="text-2xl font-bold leading-5">{user.fullname}</h3>
            <p className="leading-5 text-gray-500">Active Now</p>
          </div>
        </div>
        <div className="flex w-[30%] justify-between">
          <p>Phone</p>
          <p>Vide</p>
          <p>;</p>
        </div>
      </div>
      <AllMessages />
      <FooterSendMessage />
    </section>
  );
}
