import TripData from "./TripData";
import "./TripsStyle.css";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trip</h1>
      <p>Toy can discover unique destinations using google maps.</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          heading="Trip in Indenesia"
          text="Indonesia,officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area best place to visit."
        />

        <TripData
          image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
          heading="Trip in Malaysia"
          text="Malaysia has its origins in the Malay kingdoms, which, from the 18th century on, became subject to the British Empire, along with the British Straits Settlements protectorate. During World War Two, British Malaya, along with other nearby British and American colonies, was occupied by the Empire of Japan.[13] Following three years of occupation."
        />

        <TripData
          image="https://images.unsplash.com/photo-1566412608885-68c9e5500417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          heading="Trip in France"
          text="France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française [ʁepyblik frɑ̃sɛz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discon."
        />
      </div>
    </div>
  );
}
export default Trip;
