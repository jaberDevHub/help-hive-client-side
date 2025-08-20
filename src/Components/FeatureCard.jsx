
// import React from 'react';


// const FeatureCard = ({f}) => {
//       const Icon = f.icon; 
//   return (
//     <div className="card w-full bg-base-100 shadow-xl transition hover:shadow-2xl">
//       <div className="card-body items-center text-center">
//         <div className="bg-primary/10 p-4 rounded-full mb-4">
//           <Icon className="w-8 h-8 text-primary" />
//         </div>
//         <h3 className="card-title text-lg font-semibold">{f.title}</h3>
//         <p className="text-sm opacity-80">{f.desc}</p>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;



import React from 'react';

const FeatureCard = ({ f }) => {
  const Icon = f.icon;
  return (
    <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-lg rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-base-200">
      <div className="card-body items-center text-center p-6 md:p-8">
        <div className="flex items-center justify-center bg-primary/10 p-4 rounded-2xl mb-5 shadow-inner">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <h3 className="card-title text-xl font-bold text-base-content mb-3 leading-tight">
          {f.title}
        </h3>
        <p className="text-base text-base-content/70 leading-relaxed">
          {f.desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;