import React from 'react';
import { CheckCircle, Leaf, HeartHandshake, Handshake } from "lucide-react";
import FeatureCard from './FeatureCard';
const features = [
    {
        title: "Create Events Easily",
        desc: "Publish social‑service events with a simple, friendly form.",
        icon: CheckCircle,
    },
    {
        title: "Join & Track",
        desc: "One‑click join, automatic tracking in your dashboard.",
        icon: Handshake,
    },
    {
        title: "Green Initiatives",
        desc: "Plantation drives & cleanups – help keep Bangladesh green!",
        icon: Leaf,
    },
    {
        title: "Community Impact",
        desc: "See total volunteers & hours served in real time.",
        icon: HeartHandshake,
    },
];
const FeatureSection = () => {
    return (
        <div>
            <section className="py-12" id="features">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-3 text-center py-3 ">
                        Why You’ll ❤ Our Platform
                    </h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((f) => (
                            <FeatureCard key={f.title} f={f} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;