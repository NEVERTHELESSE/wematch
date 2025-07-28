import type { FormEvent } from "react";

export default function FooterSendMessage() {
  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form
      className="w-full border-t absolute bottom-0 flex"
      onSubmit={sendMessage}
    >
      <input
        type="text"
        placeholder="Enter your message"
        className="bg-gray-300  p-4 w-full focus:outline-0"
      />
      <button className="bg-primary rounded-2xl text-white font-bold px-4 right-2 ">
        Send
      </button>
    </form>
  );
}
