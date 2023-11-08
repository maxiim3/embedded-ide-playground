'use client';

import {useCodeStore, type StoreProps} from '@/app/code.store';
import React, {ReactElement} from 'react';

type ChildComponentProps = {
   useStore?: StoreProps;
};
type ContainerProps = {
   children: ReactElement<ChildComponentProps>[];
};

export function CodeContainer({children}: ContainerProps) {
   const useStore: StoreProps = useCodeStore();

   return (
      <>
         {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
               return React.cloneElement(child, {useStore});
            }
            return child;
         })}
      </>
   );
}
