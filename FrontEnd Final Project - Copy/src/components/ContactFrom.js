import "./ContactFromStyle.css";

function ContactFrom() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <from>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </from>
    </div>
  );
}
export default ContactFrom;
