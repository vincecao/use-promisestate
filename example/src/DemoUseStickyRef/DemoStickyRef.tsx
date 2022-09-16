import classNames from 'classnames';
import type { ReactElement } from 'react';
import * as React from 'react';
import { useStickyRef } from '../../..';

export default function DemoUseStickyRef(): ReactElement {
  // set offset as top sticky element height
  const [topStickyEnabled, topStickyGateRef] = useStickyRef('top', 256);

  // set offset as bottom sticky element height + gate height 
  const [bottomStickyEnabled, bottomStickyGateRef] = useStickyRef('bottom', 256 + 64);

  return (
    <>
      <div data-testid='sticky-div' className={classNames('p-5 border-red-600 border font-mono w-64 h-64', { 'fixed top-0': topStickyEnabled })}>Top Sticky Element</div>
      <div ref={topStickyGateRef} data-testid='sticky-gate-div' className={classNames('h-16 border-blue-600 border w-full font-mono p-5', { 'mt-64': topStickyEnabled })}>
        Top Sticky Gate Element
      </div>
      <div style={{ height: 600 }} />

      <div ref={bottomStickyGateRef} data-testid='sticky-gate-div' className={classNames('h-16 border-green-600 border w-full font-mono p-5', { 'mb-64': bottomStickyEnabled })}>
        Bottom Sticky Gate Element
      </div>
      <div data-testid='sticky-div' className={classNames('p-5 border-yellow-600 border font-mono w-64 h-64', { 'fixed bottom-0': bottomStickyEnabled })}>Bottom Sticky Element</div>
      <div style={{ height: 600 }} />
    </>
  )
}