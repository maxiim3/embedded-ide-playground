import cn from '@/lib/utils';
import {cva} from 'class-variance-authority';
import {ComponentPropsWithoutRef} from 'react';

export const flexStack = cva('flex w-[100%]', {
   variants: {
      direction: {
         column: 'flex-col',
         row: 'flex-row',
      },
      wrap: {
         true: 'flex-wrap',
         false: 'flex-nowrap',
      },
   },
   defaultVariants: {
      direction: 'column',
      wrap: false,
   },
});

export const FlexStack = (
   props: ComponentPropsWithoutRef<'div'> & {direction?: 'column' | 'row'; wrap?: boolean}
) => (
   <div
      className={cn(
         flexStack({
            direction: props?.direction || 'column',
            wrap: props?.wrap || false,
         }),
         props.className
      )}
      {...props}
   />
);
