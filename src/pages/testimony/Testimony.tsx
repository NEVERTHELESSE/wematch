import { useState, type ChangeEvent } from "react";
import Images from "../../components/Images";

export default function Testimony() {
  const [profile, setProfile] = useState({
    husband: "/users/user5.jpg",
    wife: "/users/user9.jpg",
    couple: "/girls/girl4.jpg",
  });
  function changeProfile(e: ChangeEvent<HTMLInputElement | HTMLFormElement>) {
    const createSrc = URL.createObjectURL(e.target.files[0]);
    setProfile((prev) => ({ ...prev, [e.target.name]: createSrc }));
  }
  return (
    <main className="flex items-center justify-center p-8 flex-col">
      <h2 className="text-3xl">
        <b> Don Maldonado</b> We appreciate having you here for your testimony😍
      </h2>
      <section className="rounded-2xl bg-primary p-2 w-[30rem] my-4">
        <h2 className="text-2xl my-4 text-white text-center">
          Kindly fill in all the information👩‍❤️‍👨
        </h2>
        <div>
          <input
            type="text"
            placeholder="Husband first name"
            className="w-full my-2 p-3 rounded-2xl capitalize"
          />
          <input
            type="text"
            placeholder="Wife first name"
            className="w-full my-2 p-3 rounded-2xl capitalize"
          />
        </div>
        <div className="flex text-white border">
          <div className="border-r p-3 w-[50%] flex flex-col justify-center items-center">
            <p>Husband profile pics</p>
            <input
              type="file"
              id="husband"
              name="husband"
              accept=".jpg"
              className="hidden"
              onChange={changeProfile}
            />
            <label htmlFor="husband">
              <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden ">
                <Images src={profile.husband} />
              </div>
            </label>
          </div>
          <div className="border-r p-3 w-[50%] flex flex-col justify-center items-center">
            <p>Wife profile pics</p>
            <input
              type="file"
              id="wife"
              name="wife"
              accept=".jpg"
              className="hidden"
              onChange={changeProfile}
            />
            <label htmlFor="wife">
              <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden ">
                <Images src={profile.wife} />
              </div>
            </label>
          </div>
        </div>
        <div className=" p-3 flex flex-col justify-center items-center text-white">
          <p>Couple Picture</p>
          <input
            type="file"
            id="couple"
            name="couple"
            accept=".jpg"
            className="hidden"
            onChange={changeProfile}
          />
          <label htmlFor="couple">
            <div className="h-[25rem] w-full overflow-hidden ">
              <Images src={profile.couple} />
            </div>
          </label>
        </div>
      </section>
    </main>
  );
}
