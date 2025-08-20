import React from 'react';
import hero from '../assets/images/hero-banner.jpg';
import hero2 from '../assets/images/hero-banner-2.jpg';
import hero3 from '../assets/images/hero-banner-3.jpg';
const blogs = [
  {
    id: 1,
    title: 'How Volunteering Can Change Your Life',
    description: 'Volunteering not only helps others but also builds your own confidence and skills. Read more about how volunteering can impact your life positively.',
    image: hero3
  },
  {
    id: 2,
    title: 'Why Blood Donation is Important',
    description: 'Every drop counts. Learn why blood donation is a selfless act that saves lives and makes communities stronger.',
    image: hero2
  },
  {
    id: 3,
    title: 'Tree Plantation: A Step Towards Green Future',
    description: 'Planting trees is one of the most effective ways to combat climate change. Find out how you can contribute.',
    image: hero
  },
];

const StaticBlog = () => {
  return (
    <section className="py-14 bg-base-200 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">📰 Blog & Promotional Section</h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaticBlog;
