import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { getVisitorCount, hasRecordedVisitorSession, incrementVisitorCount, markVisitorSession } from '../../utils/visitorCounter';

const numberFormatter = new Intl.NumberFormat('en-IN');

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    let isActive = true;

    const syncVisitorCount = async () => {
      try {
        const currentCount = await getVisitorCount();

        if (!isActive) {
          return;
        }

        setVisitorCount(currentCount);

        if (hasRecordedVisitorSession()) {
          return;
        }

        const nextCount = await incrementVisitorCount(currentCount);

        if (!isActive) {
          return;
        }

        setVisitorCount(nextCount);
        markVisitorSession();
      } catch (error) {
        console.error('Failed to sync visitor counter:', error);
        setVisitorCount((currentValue) => currentValue ?? 0);
      }
    };

    syncVisitorCount();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#faa519]/40 bg-white/10 px-4 py-2 text-sm text-white shadow-sm backdrop-blur-sm">
      <FaUsers className="text-[#faa519]" />
      <span className="font-medium">Visitors</span>
      <span className="font-bold text-[#faa519] min-w-[3.5rem] text-right">
        {visitorCount === null ? '...' : numberFormatter.format(visitorCount)}
      </span>
    </div>
  );
};

export default VisitorCounter;