import { useEffect, useState } from 'react';
import { Section } from './Section';
import { HeroOneButton } from './HeroOneButton';
import { Button } from './Button';

const Hero = () => {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // 模拟实时访问人数
    const random = Math.floor(Math.random() * 10) + 15;
    setActiveUsers(random);
  }, []);

  return (
    <Section
      yPadding="pt-20 pb-32"
      className="bg-gradient-to-br from-[#0b1e3f] to-[#3b1f57] text-white relative"
    >
      {/* 背景动画可在CSS层处理 */}
      <HeroOneButton
        title={
          <>
            {'Discover Your '}
            <span className="text-primary-500">Sleep Chronotype</span>
            {' in 3 Minutes'}
          </>
        }
        description={
          <>
            {"Join 500,000+ people who've unlocked their genetic sleep pattern with our AI-powered sleep scientist"}
            <div className="mt-4 text-sm text-gray-300">
              ⭐⭐⭐⭐⭐ 4.9/5 (12,847 reviews) | 🔒 SSL Secured | 🧬 Based on Stanford Research
            </div>
          </>
        }
        button={<Button xl>Take the Free Sleep Test →</Button>}
      />

      {/* 实时访客计数器 */}
      <div className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded shadow-md text-sm">
        {activeUsers} people taking the test now
      </div>

      {/* 动画图标占位（后续可用动画组件或 SVG 实现） */}
      <div className="absolute top-4 right-4 opacity-20 text-4xl">
        🦁 🐻 🐺 🐬
      </div>
    </Section>
  );
};

export { Hero };

