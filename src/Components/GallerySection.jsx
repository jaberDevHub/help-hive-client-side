import React from 'react';

const galleryImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ170BxWV9e5kpcsS4l2GowfapgtXJfPe0OnQQVAr_Mjv9MfzW9Mr6Oc3hVD7gynXmexz4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSiq5QG6wi8nna1E9rTamMzGvLKab_ebOnA&s0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB2xGbu3cSLME6sxcj3Yoo1tCQAj_zcvJNIWt6dTo5hj1l9RHJxjUYybjnwvl3SCWaL0&usqp=CAU",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&w=800",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&w=800",
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&w=800",
];

const GallerySection = () => {
    return (
        <div>
            <section className="py-12 bg-base-200" id="gallery">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center flex justify-center items-center">Event Moments Gallery</h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {galleryImages.map((src, idx) => (
                            <figure key={idx} className="overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt={`Event photo ${idx + 1}`}
                                    className="h-56 w-full object-cover hover:scale-105 transition-transform" />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GallerySection;