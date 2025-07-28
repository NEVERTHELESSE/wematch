import { useEffect, useState, type MouseEventHandler } from "react";
import Images from "../../components/Images";
import type { singleInterface } from "../../interface/single";
import { Link } from "react-router-dom";

interface propsInterface {
  info: singleInterface;
  cancelImage: MouseEventHandler;
}
export default function UserInfo({ info, cancelImage }: propsInterface) {
  const [selected, setSelected] = useState(0);
  function changeSelected(index: number) {
    setSelected(index);
  }
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        cancelImage();
      }
    });

    // const cancel = () => {
    // };
    // cancel();
    // return () => {
    //   removeEventListener("keypress", cancel);
    // };
  }, []);

  return (
    <main className="w-full pt-[5rem] overscroll-auto h-full fixed px-2  top-0 bg-[#000000af] flex justify-center items-center">
      <section className="bg-secondary  w-[60rem] md:justify-between flex text-black rounded-2xl overflow-hidden  relative">
        <button
          onClick={cancelImage}
          className="absolute top-0 bg-red-500 text-white font-bold p-2"
        >
          X
        </button>
        <div
          className="md:h-[90%] w-[25rem] sm:w-auto rounded-l-2xl overflow-hidden flex "
          // onMouseMove={zoomImage}
        >
          <Images src={`/girls/${info.imageUrl[selected]}`} />
        </div>
        <div className="flex ">
          <div className="absolute flex left-2  bottom-2 items-end">
            {info.imageUrl.map((image, index) => (
              <div
                className={`w-[5rem] duration-500 cursor-pointer h-[7rem] border-2 ${
                  index == selected && "h-[8rem]"
                }`}
                key={index}
                onClick={() => changeSelected(index)}
              >
                <Images src={`/girls/${image}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 md:p-4  md:text-2xl w-[10rem] sm:w-[15rem]  md:w-[50%]">
          <div className="my-4 flex flex-col sm:flex-row">
            <Link
              to={`/chats?id=${info.id}`}
              className="text-2xl bg-primary p-2 rounded-lg my-2"
            >
              Start Chatting
            </Link>
            <Link
              to="https://web.whatsapp/chat?"
              className="text-2xl bg-green-400 p-2 rounded-lg my-2 mx-2"
            >
              Whatsapp
            </Link>
          </div>
          <p>Full Name: {info.fullname}</p>
          <p>Age: {info.age}</p>
          <p>Gender: {info.gender == 0 ? "Male" : "Female"}</p>
          <p>Country: {info.country}</p>
          <p>Email: {info.email}</p>
          <p>Phone Number: {info.phoneNumber}</p>
          <p>Hobbies: Singing & Dancing </p>
          <p>For Fun: Playing of games </p>
          <h4 className="text-bold underline my-2">About Me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, optio
            nostrum, saepe voluptatibus architecto, distinctio magnam
            perferendis blanditiis porro...
          </p>
        </div>
      </section>
    </main>
  );
}
