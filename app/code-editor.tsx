'use client';

import {StoreProps} from '@/app/code.store';
import {javascript} from '@codemirror/lang-javascript';
import {githubDark} from '@uiw/codemirror-theme-github';
import ReactCodeMirror from '@uiw/react-codemirror';
import {useCallback, useState} from 'react';

export function CodeEditor({useStore}: {useStore: StoreProps}) {
   const {value, setValue} = useStore;
   const [localState, setLocalState] = useState(value);

   // Debounce function to delay execution
   const debounce = (func: any, delay: number) => {
      let timer: NodeJS.Timeout;
      return (...args: any[]) => {
         clearTimeout(timer);
         timer = setTimeout(() => {
            func(...args);
         }, delay);
      };
   };

   // Use useCallback to memoize the debounced function
   const debouncedUpdate = useCallback(
      debounce((nextValue: string) => {
         setValue(nextValue);
      }, 800),
      [] // Dependencies array is empty, meaning the function is created only once
   );

   // Update local state immediately, but delay store update
   const onCodeChange = (value: string) => {
      setLocalState(value); // This updates the local state immediately
      debouncedUpdate(value); // This will call setValue after a delay
   };

   return (
      <ReactCodeMirror
         theme={githubDark}
         extensions={[javascript({jsx: true, typescript: true})]}
         onChange={onCodeChange}
         value={localState}
         height='30vh'
         width={'100%'}
      />
   );
}
