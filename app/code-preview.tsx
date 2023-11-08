'use client';

import {StoreProps} from '@/app/store';
import React, {Suspense} from 'react';
import {LiveError, LiveProvider, LivePreview as Preview} from 'react-live';

export function CodePreview({useStore}: {useStore: StoreProps}) {
   const {value} = useStore;

   return (
      <div className='mockup-browser border bg-base-300'>
         <div className='mockup-browser-toolbar'>
            <div className='input'>your-component-preview.io</div>
         </div>
         <div className='flex justify-center bg-base-200 px-4 py-16'>
            <Suspense fallback={<div className={'loading loading-spinner'} />}>
               <LiveProvider
                  code={value}
                  transformCode={code => {
                     return `(() => {
                  const Component = ${code};
                  return <Component />;
                  })()`;
                  }}
                  scope={{React}}
                  language={'jsx'}>
                  <LiveError />
                  <Preview />
               </LiveProvider>
            </Suspense>
         </div>
      </div>
   );
}
