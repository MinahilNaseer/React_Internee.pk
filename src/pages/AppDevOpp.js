import React from "react";
import FeaturedOpportunity from "../components/FeaturedOpp";

function AppDevOpp() {
    const opportunities = [
        {
            title: "Flutter Internship",
            location: "Karachi, Pakistan",
            duration: "2 months",
            type: "Internship",
            mode: "Remote",
            logo: "/flutter.png",
        },
        {
            title: "React Native Internship",
            location: "Karachi, Pakistan",
            duration: "2 months",
            type: "Internship",
            mode: "Remote",
            logo: "/react-native.png",
        },
        {
            title: "Swift Internship",
            location: "Karachi, Pakistan",
            duration: "2 months",
            type: "Internship",
            mode: "Remote",
            logo: "/Swift.png",
        },
        {
            title: "Andriod Internship",
            location: "Karachi, Pakistan",
            duration: "2 months",
            type: "Internship",
            mode: "Remote",
            logo: "/andriod.png",
        },
    ];

    return (
        <>
            <button
                className="absolute top-35 left-19 bg-green-100 text-green-600 p-2 rounded-full shadow hover:bg-green-200"
                onClick={() => window.history.back()} // Navigates back
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Featured Opportunities</h2>
                {opportunities.map((opportunity, index) => (
                    <FeaturedOpportunity
                        key={index}
                        title={opportunity.title}
                        location={opportunity.location}
                        duration={opportunity.duration}
                        type={opportunity.type}
                        mode={opportunity.mode}
                        logo={opportunity.logo}
                    />
                ))}
            </div>

        </>

    );
}

export default AppDevOpp;
