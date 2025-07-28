import { Link } from "react-router-dom";
import Images from "../../components/Images";

export default function Footer() {
  const contacts = [
    {
      icon: "whatsapp.png",
      address: "+234 905 1602 536",
      link: "web.whastapp.com",
    },

    {
      icon: "google.png",
      address: "loveconnect@mail.love.ng",
      link: "gmail/auth=1?sent=loveconnect@mail.love.ng",
    },
    {
      icon: "facebook.png",
      address: "loveconnect",
      link: "facebook.com/loveconnect",
    },
    {
      icon: "tiktok.png",
      address: "@loveconnect",
      link: "facebook.tiktok@loveconnect",
    },
    {
      icon: "youtube.png",
      address: "@loveconnect",
      link: "https://youtube@loveconnect",
    },
    {
      icon: "linkedin.png",
      address: "@loveconnect",
      link: "https://linkedin@loveconnect",
    },
  ];
  return (
    <footer className="w-full bg-primary p-2 sm:p-8">
      <div className="flex text-white justify-around">
        {contacts.map((contact) => (
          <Link to={contact.link} className="flex flex-col items-center m-2">
            <div className="size-[3rem]">
              <Images src={`/icons/${contact.icon}`} />
            </div>
            <p>{contact.address}</p>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-[5rem]">
          <Images src="/wematch.png" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">
            Love <span>Connect💝</span>
          </h3>
          <p className="text-tertiary font-bold">Meet your soulmate</p>
        </div>
      </div>
    </footer>
  );
}
