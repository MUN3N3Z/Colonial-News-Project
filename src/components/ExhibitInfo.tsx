import React from 'react';

interface ExhibitInfoProps {
  description: string[];
}

function ExhibitInfo({ description }: ExhibitInfoProps): React.JSX.Element {
  return (
    <section className="py-8 max-w-3xl mx-auto text-center">
      {description.map((paragraph, index) => (
        <p key={index} className="mb-6 text-base md:text-lg text-white leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default ExhibitInfo;