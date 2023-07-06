import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano (IPA: [taʔal]; Tagalog: Bulkang Taal) is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake."
        img1="https://images.unsplash.com/photo-1589634752793-aabd114351ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        img2="https://images.unsplash.com/photo-1607068891828-f16297950a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul, Batulao"
        text="Mount Batulao is an inactive stratovolcano in the Calabarzon region of the Philippines, located in northwest Batangas province along its border with Cavite.[1][3] It is a dissected andesitic stratovolcano at the northwestern rim of the Taal Caldera which began to form in the late Pliocene period, about 3.4 million years ago.[4] The mountain is a prominent landmark of jagged peaks, rolling to rugged ridges and deep gorges situated just west of the hill station of Tagaytay at the southwestern end of the Tagaytay Ridge."
        img1="https://images.unsplash.com/photo-1527577440030-436a36b07401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        img2="https://images.unsplash.com/photo-1526139334526-f591a54b477c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
  );
};
export default Destination;
