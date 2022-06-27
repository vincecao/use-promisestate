import * as React from 'react';

type SampleSectionProps = {
  title: string;
  sampleCodeBlock?: React.ReactElement;
  sampleControls?: React.ReactElement;
  resultCodeBlock?: React.ReactElement;
  children?: React.ReactNode;
};

export default function SampleSection({
  title,
  children,
  sampleCodeBlock,
  sampleControls,
  resultCodeBlock,
}: SampleSectionProps) {
  return (
    <div className="mt-5">
      <p className="text-xl mb-2 font-semibold">{title}</p>
      {sampleCodeBlock}
      {sampleControls}
      {resultCodeBlock}
      {children}
    </div>
  );
}
