import { useEffect, useState } from 'react';
import { Section } from '../layout/Section';
import { Button } from '../button/Button';

const Hero = () => {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * 10) + 15;
    setActiveUsers(random);
  }, []);

  return (
    <Section yPadding="pt-20 pb-32 bg-gradient-to-br from-[#0b1e3f] to-[#3b1f57] text-white relative">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Your <span className="text-primary-500">Sleep Chronotype</span> in 3 Minutes
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Join 500,000+ people who've unlocked their genetic sleep pattern with our AI-powered sleep scientist
        </p>
        <div className="mt-8">
          <Button xl>Take the Free Sleep Test →</Button>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          ⭐⭐⭐⭐⭐ 4.9/5 (12,847 reviews) | 🔒 SSL Secured | 🧬 Based on Stanford Research
        </div>
      </div>

      <div className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded shadow-md text-sm">
        {activeUsers} people taking the test now
      </div>

      <div className="absolute top-4 right-4 opacity-20 text-4xl">
        🦁 🐻 🐺 🐬
      </div>
    </Section>
  );
};

// trigger vercel redeploy after Section.tsx className fix

export { Hero };

