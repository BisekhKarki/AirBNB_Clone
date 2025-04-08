import Conversation from "@/components/Inbox/Conversation";
import PropertyList from "@/components/properties/PropertyList";
import beach from "@/public/beach_1.jpg";

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="text-2xl my-6 mb-6">My Inbox</h1>
      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  );
};

export default InboxPage;
