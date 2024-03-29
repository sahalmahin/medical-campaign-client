import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Camp = ({ camp }) => {

    const { _id, CampName, Image, CampFees, ScheduledDateTime, VenueLocation, SpecializedServices, HealthcareProfessionals, TargetAudience } = camp;

    return (
        <>
            <Helmet>
                <title>Medical Camp | See Our Camp</title>
            </Helmet>
            <div className="card bg-base-100 shadow-xl border border-blue-500 m-12">
                <figure><img className="h-56" src={Image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {CampName}
                        <div className="badge badge-gray">Fees: {CampFees}</div>
                    </h2>
                    <div>
                        <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold mb-4">Specialized Services : {SpecializedServices}</p>
                        <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold mb-4">Healthcare Professionals : {HealthcareProfessionals}</p>
                        <p className="border rounded-lg border-sky-500 p-4 bg-gray-200 font-semibold">Target Audience : {TargetAudience}</p>
                    </div>
                    <div className="card-actions">
                        <div className="badge badge-outline bg-blue-500 font-semibold text-white p-4">Location: {VenueLocation}</div>
                        <div className="badge badge-outline bg-blue-500 font-semibold text-white p-4">Schedule: {ScheduledDateTime}</div>
                    </div>
                    <Link to={`/camp-details/${_id}`}><button className="btn btn-outline">Details</button></Link>
                </div>
            </div>
        </>
    );
};

export default Camp;