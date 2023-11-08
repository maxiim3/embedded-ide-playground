// @ts-ignore
import * as Babel from '@babel/standalone';

export const useBabel = (code: string) => {
   const {code: transformed} = Babel.transform(code, {
      presets: ['env', 'react'],
   });
   console.log(transformed);
   return transformed;
};
