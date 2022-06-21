import * as React from 'react';
import DemoGithubSection from './DemoGithubSection';
import DemoIPSection from './DemoIPSection';

export default function DemoUsePromiseState(): React.ReactElement {
  return (
    <>
      <DemoIPSection />
      <DemoGithubSection />
    </>
  );
}
