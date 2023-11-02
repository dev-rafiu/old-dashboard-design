import ActiveUsers from "../ui/dashboard/courier/active-users";
import AverageDeliveryTime from "../ui/dashboard/courier/average-delivery-time";
import CompletedTrips from "../ui/dashboard/courier/completed-trips";
import CustomerSatisfaction from "../ui/dashboard/courier/customer-satisfaction";
import CustomersPerService from "../ui/dashboard/courier/customers-per-service";
import InfoCard from "../ui/dashboard/courier/info-card";
import NewRiders from "../ui/dashboard/courier/new-riders";
import NewSignUp from "../ui/dashboard/courier/new-sign-up";
import NewSignUps from "../ui/dashboard/courier/new-sign-ups";
import Revenue from "../ui/dashboard/courier/revenue";
import Riders from "../ui/dashboard/courier/riders";
import UsersByRevenue from "../ui/dashboard/courier/users-by-revenue";

function Page() {
  return (
    <section className="bg-backgound-secondary space-y-4 p-5">
      {/* revenue and riders */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Revenue />
        <Riders />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UsersByRevenue />
        <AverageDeliveryTime />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ActiveUsers />
        <NewSignUp />
        <NewSignUps />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CustomerSatisfaction />
        <CustomersPerService />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <CompletedTrips />
        <NewRiders />
      </div>
    </section>
  );
}

export default Page;
